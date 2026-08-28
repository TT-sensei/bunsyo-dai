import {
  AnswerChecker,
  EDU_EVENTS,
  FANTASY,
  loadState,
  addMistake,
  emitEdu,
  playSound,
  recordCorrect,
  awardRandomCollection,
  toggleSound,
  QuestionPool
} from './common.js';
import {
  buildSessionTemplates,
  generateQuestion,
  getModeLabel,
  getTemplatesFor,
  gradeMeta,
  operationMeta
} from './data.js';
import {
  COLLECTION_COUNT,
  collectionCatalog,
  collectionImageUrl,
  collectionLabel,
  collectionRarityLabel,
  collectionSeriesLabel
} from './collection.js';
const $ = (selector) => document.querySelector(selector);
const SESSION_SIZE = 7;
const params = new URLSearchParams(window.location.search);
const grade = Number(params.get('grade')) || 1;
const rawMode = params.get('mode') || 'mixed';
const modeAliases = {
  story: 'mixed',
  train_add: 'add',
  train_sub: 'sub',
  train_mul: 'mul',
  train_div: 'div',
  train_addsub: 'mixed',
  cave: 'mistakes'
};
const mode = modeAliases[rawMode] || rawMode;
const gradeInfo = gradeMeta[grade] || gradeMeta[1];

const checker = new AnswerChecker({ eventTarget: document });
const stateAtStart = loadState();
const mistakeIds = stateAtStart.mistakes.map((item) => item.templateId);
const availableTemplates = getTemplatesFor(grade, mode, mistakeIds);
const sessionTemplates = buildSessionTemplates(availableTemplates, SESSION_SIZE);
const pool = new QuestionPool(sessionTemplates, { mode: 'random' });

let currentQuestion = null;
let questionNumber = 0;
let selectedOperation = null;
let formulaPassed = false;
let hintUsed = false;
let answerRevealed = false;
let formulaAttempts = 0;
let answerAttempts = 0;
let session = {
  formulas: 0,
  correct: 0,
  viewed: 0,
  helped: 0,
  completed: 0,
  collectionReward: null
};

function operatorSymbol(operation) {
  return operationMeta[operation] ? operationMeta[operation].symbol : '□';
}

function updateSoundButton() {
  const soundButton = $('#sound-toggle');
  const current = loadState();
  soundButton.textContent = current.soundOn === false ? '🔇 音 OFF' : '🔊 音 ON';
}

function setNavi(kind, message) {
  const sources = {
    start: FANTASY.characters.sora,
    thinking: FANTASY.characters.kai,
    retry: FANTASY.characters.nami,
    support: FANTASY.characters.kai,
    correct: FANTASY.characters.saku
  };
  const image = $('#navi-img');
  image.classList.remove('is-hidden');
  image.src = sources[kind] || sources.start;
  image.alt = '文章題の学習を案内するファンタジーNAVI';
  $('#navi-label').textContent = kind === 'correct' ? 'できたね' : 'NAVI';
  $('#navi-message').textContent = message;
}

function updateProgress() {
  $('#q-progress').textContent = questionNumber + ' / ' + SESSION_SIZE;
  $('#q-progress-fill').style.width = Math.min(100, questionNumber / SESSION_SIZE * 100) + '%';
}

function updateFormulaPreview() {
  const left = $('#formula-num1').value || '□';
  const right = $('#formula-num2').value || '□';
  const symbol = selectedOperation ? operatorSymbol(selectedOperation) : '□';
  const expression = left + ' ' + symbol + ' ' + right;
  $('#formula-preview').textContent = '式：' + expression;
  $('#answer-formula-view').textContent = '式：' + expression;
}

function resetAnswerState() {
  formulaPassed = false;
  answerRevealed = false;
  hintUsed = false;
  formulaAttempts = 0;
  answerAttempts = 0;
  selectedOperation = null;
  $('#formula-num1').value = '';
  $('#formula-num2').value = '';
  $('#answer-input').value = '';
  $('#answer-input').disabled = true;
  $('#check-answer').disabled = true;
  $('#check-answer').classList.remove('is-hidden');
  $('#check-formula').classList.remove('is-hidden');
  $('#next-question').classList.add('is-hidden');
  $('#hint-button').classList.remove('is-hidden');
  $('#answer-help-button').classList.add('is-hidden');
  $('#hint-box').classList.add('is-hidden');
  $('#answer-reveal').classList.add('is-hidden');
  $('#formula-feedback').className = 'feedback';
  $('#formula-feedback').textContent = '';
  $('#answer-feedback').className = 'feedback';
  $('#answer-feedback').textContent = '';
  $('#formula-step').classList.remove('is-done');
  $('#formula-step').classList.add('is-active');
  $('#answer-step').classList.remove('is-active', 'is-done');
  $('#answer-step').classList.add('is-locked');
  $('#answer-step').setAttribute('aria-disabled', 'true');
  document.querySelectorAll('.operator-button').forEach((button) => {
    button.disabled = false;
    button.classList.remove('is-selected');
    button.setAttribute('aria-pressed', 'false');
  });
  $('#formula-num1').disabled = false;
  $('#formula-num2').disabled = false;
  updateFormulaPreview();
}

function showQuestion(question) {
  currentQuestion = question;
  questionNumber += 1;
  updateProgress();
  resetAnswerState();
  $('#stage-pill').textContent = '第' + questionNumber + '問';
  $('#type-pill').textContent = question.typeLabel;
  $('#q-text').textContent = question.text;
  const background = FANTASY.backgrounds[question.scene] || FANTASY.backgrounds.forest;
  $('#scene-backdrop').style.backgroundImage = 'url("' + background + '")';
  setNavi('start', '文章の中の数の関係を見つけよう。');
  playSound('think');
  window.setTimeout(() => $('#formula-num1').focus(), 80);
}

function loadNextQuestion() {
  const template = pool.next();
  if (!template) {
    showResult();
    return;
  }
  showQuestion(generateQuestion(template));
}

function setFeedback(target, type, message) {
  target.className = 'feedback ' + type;
  target.textContent = message;
}

function formulaMatches(question, left, operation, right) {
  const expression = String(left) + operatorSymbol(operation) + String(right);
  const expected = String(question.num1) + operatorSymbol(question.operation) + String(question.num2);
  const candidates = [expected];
  if (question.operation === 'add' || question.operation === 'mul') {
    candidates.push(String(question.num2) + operatorSymbol(question.operation) + String(question.num1));
  }
  return checker.matches(expression, candidates);
}

function checkFormula() {
  if (formulaPassed || answerRevealed) return;
  const leftRaw = $('#formula-num1').value;
  const rightRaw = $('#formula-num2').value;
  if (leftRaw === '' || rightRaw === '' || !selectedOperation) {
    setFeedback($('#formula-feedback'), 'info', '数字と演算記号をそろえてみよう。');
    return;
  }

  const left = Number(leftRaw);
  const right = Number(rightRaw);
  const isCorrect = formulaMatches(currentQuestion, left, selectedOperation, right);
  formulaAttempts += 1;
  emitEdu(isCorrect ? EDU_EVENTS.CORRECT : EDU_EVENTS.WRONG, {
    stage: 'formula',
    question: currentQuestion,
    answer: leftRaw + operatorSymbol(selectedOperation) + rightRaw,
    isCorrect
  });

  if (isCorrect) {
    formulaPassed = true;
    session.formulas += 1;
    $('#formula-num1').disabled = true;
    $('#formula-num2').disabled = true;
    document.querySelectorAll('.operator-button').forEach((button) => { button.disabled = true; });
    $('#formula-step').classList.remove('is-active');
    $('#formula-step').classList.add('is-done');
    $('#answer-step').classList.remove('is-locked');
    $('#answer-step').classList.add('is-active');
    $('#answer-step').setAttribute('aria-disabled', 'false');
    $('#answer-input').disabled = false;
    $('#check-answer').disabled = false;
    $('#answer-help-button').classList.remove('is-hidden');
    $('#answer-formula-view').textContent = '式：' + currentQuestion.num1 + ' ' + operatorSymbol(currentQuestion.operation) + ' ' + currentQuestion.num2;
    setFeedback($('#formula-feedback'), 'correct', '式がたてられたね。次はこの式を計算しよう。');
    setNavi('support', '式の道が開いたよ。答えを出してみよう。');
    playSound('sparkle');
    window.setTimeout(() => $('#answer-input').focus(), 80);
  } else {
    addMistake(currentQuestion);
    setFeedback($('#formula-feedback'), 'wrong', formulaAttempts > 1
      ? '数字の関係をもう一度。ことばに注目してみよう。'
      : 'おしい。文章の中の「はじめ」と「変わった数」を見直そう。');
    setNavi('retry', '大丈夫。数がどう変わったかを見直そう。');
    playSound('wrong');
  }
}

function showHint() {
  hintUsed = true;
  const box = $('#hint-box');
  box.innerHTML =
    '<strong>ことばに注目</strong>' +
    '<div>次の言葉から、数の関係を考えてみよう。</div>' +
    '<div class="hint-keywords">' +
      currentQuestion.keywords.map((word) => '<span>「' + word + '」</span>').join('') +
    '</div>' +
    '<div style="margin-top:7px;">' + currentQuestion.reason + '</div>';
  box.classList.remove('is-hidden');
  $('#hint-button').classList.add('is-hidden');
  setNavi('thinking', '大事な言葉を見つけると、式の形が見えてくるよ。');
  playSound('hint');
}

function showAnswerHelp() {
  if (!formulaPassed || answerRevealed) return;
  answerRevealed = true;
  session.viewed += 1;
  session.helped += 1;
  session.completed += 1;
  recordCorrect(currentQuestion, { hintUsed, answerHelped: true });
  const reveal = $('#answer-reveal');
  reveal.innerHTML =
    '<strong>答えをお願い</strong><br>' +
    '答えは <strong>' + currentQuestion.answer + '</strong> です。式は自分でたてられたね。';
  reveal.classList.remove('is-hidden');
  $('#check-formula').classList.add('is-hidden');
  $('#check-answer').classList.add('is-hidden');
  $('#answer-help-button').classList.add('is-hidden');
  $('#hint-button').classList.add('is-hidden');
  $('#next-question').classList.remove('is-hidden');
  $('#next-question').textContent = questionNumber === SESSION_SIZE ? '結果を見る →' : '次の問題へ（答えサポート）';
  setFeedback($('#answer-feedback'), 'info', '立式は記録したよ。答えをお願いしたので、経験値は少なめです。');
  setNavi('support', '式は自分でたてられたね。答えはNAVIに任せて大丈夫。');
  playSound('answer');
}

function checkAnswer() {
  if (!formulaPassed || answerRevealed) return;
  const raw = $('#answer-input').value;
  if (raw === '') {
    setFeedback($('#answer-feedback'), 'info', '答えを数字で入れてみよう。');
    $('#answer-input').focus();
    return;
  }
  answerAttempts += 1;
  const isCorrect = checker.check(raw, currentQuestion.answer, {
    numeric: true,
    detail: { stage: 'answer', question: currentQuestion }
  });

  if (isCorrect) {
    session.correct += 1;
    session.completed += 1;
    const reward = recordCorrect(currentQuestion, { hintUsed });
    $('#check-answer').classList.add('is-hidden');
    $('#hint-button').classList.add('is-hidden');
    $('#answer-help-button').classList.add('is-hidden');
    $('#next-question').classList.remove('is-hidden');
    $('#next-question').textContent = questionNumber === SESSION_SIZE ? '結果を見る →' : '次の問題へ →';
    let message = '正解！式も答えもぴったり。立式のかけらを1つ手に入れたよ。';
    if (reward.levelUp) message += ' Lv.' + reward.state.level + 'になった！';
    setFeedback($('#answer-feedback'), 'correct', message);
    setNavi('correct', '式をたてて、答えまで出せたね。');
    playSound('correct');
  } else {
    addMistake(currentQuestion);
    setFeedback($('#answer-feedback'), 'wrong', answerAttempts > 1
      ? '式は合っているよ。計算をもう一度確かめよう。'
      : '式は合っているよ。数字を計算してみよう。');
    setNavi('thinking', 'たてた式を、ゆっくり計算してみよう。');
    playSound('wrong');
  }
}

function showResult() {
  const state = loadState();
  if (!session.collectionReward) {
    session.collectionReward = awardRandomCollection(collectionCatalog);
  }
  const reward = session.collectionReward;
  $('#result-formulas').textContent = String(session.formulas);
  $('#result-correct').textContent = String(session.correct);
  $('#result-viewed').textContent = String(session.viewed);
  $('#result-subtitle').textContent = gradeInfo.label + '・' + getModeLabel(mode) + 'をふり返ろう。';
  let message = session.correct >= 6
    ? 'たくさんの式の道を開いたね。文章の読み方が力になっているよ。'
    : session.formulas >= 6
      ? '式をたてるところまで、しっかり進めたね。次は答えまで挑戦しよう。'
      : '手がかりを使いながら、もう一度いろいろな文章題に挑戦してみよう。';
  message += ' 7問の旅を完走したよ。累計 ' + state.solved + '問の立式を記録中。';
  $('#result-message').textContent = message;
  const rewardBox = $('#collection-reward');
  const badgeLarge = $('#collection-badge-large');
  if (reward.badge) {
    rewardBox.classList.remove('is-hidden');
    badgeLarge.innerHTML = '<img src="' + collectionImageUrl(reward.badge) + '" alt="' + collectionLabel(reward.badge) + '">';
    $('#collection-reward-title').textContent = 'バッジを見つけた！';
    $('#collection-reward-copy').textContent = collectionSeriesLabel(reward.badge.series) + '・' + collectionRarityLabel(reward.badge.rarity) + 'の「' + reward.badge.item + '」をコレクションに追加しました。';
  } else {
    rewardBox.classList.remove('is-hidden');
    badgeLarge.innerHTML = '<span>✓</span>';
    $('#collection-reward-title').textContent = '150こコンプリート！';
    $('#collection-reward-copy').textContent = 'すべてのコレクションバッジを見つけました。';
  }
  $('#result-overlay').classList.remove('is-hidden');
  playSound('practice');
}

function showEmpty() {
  $('.quest-layout').classList.add('is-hidden');
  $('#empty-state').classList.remove('is-hidden');
  $('#q-text').textContent = 'まちがいノートに、今は問題がありません。';
}

function nextQuestion() {
  if (questionNumber >= SESSION_SIZE) {
    showResult();
  } else {
    loadNextQuestion();
  }
}

function retryQuest() {
  window.location.reload();
}

document.querySelectorAll('.operator-button').forEach((button) => {
  button.addEventListener('click', () => {
    if (formulaPassed) return;
    selectedOperation = button.dataset.operation;
    document.querySelectorAll('.operator-button').forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-selected', active);
      item.setAttribute('aria-pressed', String(active));
    });
    updateFormulaPreview();
    playSound('click');
  });
});

$('#formula-num1').addEventListener('input', updateFormulaPreview);
$('#formula-num2').addEventListener('input', updateFormulaPreview);
$('#check-formula').addEventListener('click', checkFormula);
$('#check-answer').addEventListener('click', checkAnswer);
$('#hint-button').addEventListener('click', showHint);
$('#answer-help-button').addEventListener('click', showAnswerHelp);
$('#next-question').addEventListener('click', nextQuestion);
$('#retry-quest').addEventListener('click', retryQuest);
$('#sound-toggle').addEventListener('click', () => {
  toggleSound();
  updateSoundButton();
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') return;
  if (document.activeElement === $('#formula-num1') || document.activeElement === $('#formula-num2')) {
    event.preventDefault();
    checkFormula();
  } else if (document.activeElement === $('#answer-input')) {
    event.preventDefault();
    checkAnswer();
  }
});

$('#navi-img').addEventListener('error', () => {
  $('#navi-img').classList.add('is-hidden');
});
$('#result-art-img').addEventListener('error', () => {
  $('#result-art-img').classList.add('is-hidden');
});

$('#quest-title').textContent = gradeInfo.label + '｜' + getModeLabel(mode);
updateSoundButton();

if (!availableTemplates.length) {
  showEmpty();
} else {
  loadNextQuestion();
}
