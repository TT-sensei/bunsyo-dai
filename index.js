import {
  FANTASY,
  loadState,
  playSound,
  resetProgress,
  toggleSound
} from './common.js';
import {
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

let selectedGrade = 1;
let selectedMode = 'mixed';
let state = loadState();

function renderProgress() {
  state = loadState();
  $('#solved-count').textContent = String(state.solved);
  $('#level-label').textContent = 'Lv.' + state.level;
  $('#exp-label').textContent = '次のレベルまで ' + String(Math.max(0, 10 - state.exp));
  $('#exp-fill').style.width = Math.min(100, state.exp * 10) + '%';
  renderCollection();
  const soundButton = $('#sound-toggle');
  soundButton.textContent = state.soundOn === false ? '🔇 音 OFF' : '🔊 音 ON';
}

function renderCollection() {
  const owned = new Set(state.collections || []);
  $('#collection-count').textContent = String(owned.size);
  $('#collection-total').textContent = String(COLLECTION_COUNT);
  $('#collection-grid').innerHTML = collectionCatalog.map((badge) => {
    const found = owned.has(badge.id);
    const label = collectionLabel(badge);
    return '<article class="collection-badge-card' + (found ? ' is-found' : ' is-locked') + '">' +
      '<div class="collection-badge-frame">' +
        (found
          ? '<img src="' + collectionImageUrl(badge) + '" alt="' + label + '" loading="lazy">'
          : '<span aria-hidden="true">?</span>') +
      '</div>' +
      '<strong>' + (found ? badge.item : '？？？') + '</strong>' +
      '<small>' + collectionSeriesLabel(badge.series) + '・' + collectionRarityLabel(badge.rarity) + '</small>' +
    '</article>';
  }).join('');
}

function renderGrades() {
  const grid = $('#grade-grid');
  grid.innerHTML = Object.entries(gradeMeta).map(([grade, meta]) => {
    const isSelected = Number(grade) === selectedGrade;
    return (
      '<button class="grade-card' + (isSelected ? ' is-selected' : '') + '" ' +
      'data-grade="' + grade + '" data-color="' + meta.color + '" type="button" ' +
      'aria-pressed="' + String(isSelected) + '">' +
        '<span class="grade-check">選択中</span>' +
        '<span class="grade-top">' +
          '<span class="grade-number">' + grade + '</span>' +
          '<span><strong>' + meta.label + '</strong></span>' +
        '</span>' +
        '<p>' + meta.subtitle + '</p>' +
      '</button>'
    );
  }).join('');
}

function routeCard(mode, label, sub, icon, color, selected) {
  return (
    '<button class="route-card' + (selected ? ' is-selected' : '') + '" ' +
      'data-mode="' + mode + '" data-color="' + color + '" type="button" ' +
      'aria-pressed="' + String(selected) + '">' +
      '<span class="route-icon" aria-hidden="true">' + icon + '</span>' +
      '<strong>' + label + '</strong>' +
      '<small>' + sub + '</small>' +
    '</button>'
  );
}

function renderRoutes() {
  state = loadState();
  const meta = gradeMeta[selectedGrade];
  const gradeMistakes = state.mistakes.filter((item) => Number(item.grade) === selectedGrade);
  const availableModes = ['mixed', ...meta.operations];
  if (gradeMistakes.length) availableModes.push('mistakes');
  if (!availableModes.includes(selectedMode)) selectedMode = 'mixed';

  const cards = [
    routeCard('mixed', 'おすすめの旅', 'いろいろな場面を7問', '✦', 'violet', selectedMode === 'mixed')
  ];
  meta.operations.forEach((operation) => {
    const item = operationMeta[operation];
    cards.push(routeCard(operation, item.label + 'の道', '式の形を見つける7問', item.icon, item.color, selectedMode === operation));
  });
  if (gradeMistakes.length) {
    cards.push(routeCard('mistakes', 'まちがいノート', gradeMistakes.length + '種類をもう一度', '↺', 'amber', selectedMode === 'mistakes'));
  }

  const selectedLabel = selectedMode === 'mixed'
    ? 'おすすめの旅'
    : selectedMode === 'mistakes'
      ? 'まちがいノート'
      : operationMeta[selectedMode].label + 'の道';

  $('#route-panel').innerHTML =
    '<div class="route-panel-head">' +
      '<div><h2>' + meta.label + 'の式の道</h2><p>' + meta.description + '</p></div>' +
      '<div class="route-map-mark"><img src="' + FANTASY.groups.training + '" alt="" aria-hidden="true"></div>' +
    '</div>' +
    '<div class="route-grid">' + cards.join('') + '</div>' +
    '<div class="route-actions">' +
      '<span class="route-selected-note">' + meta.label + '｜' + selectedLabel + '｜1回7問</span>' +
      '<button class="primary-button" id="start-quest" type="button">この旅をはじめる →</button>' +
    '</div>';
}

function selectGrade(grade) {
  selectedGrade = Number(grade);
  selectedMode = 'mixed';
  renderGrades();
  renderRoutes();
  playSound('click');
  $('#route-panel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function selectMode(mode) {
  selectedMode = mode;
  renderRoutes();
  playSound('click');
}

function startQuest() {
  playSound('start');
  window.location.href = 'quest.html?grade=' + selectedGrade + '&mode=' + encodeURIComponent(selectedMode);
}

function attachImageFallback(image) {
  image.addEventListener('error', () => {
    image.classList.add('is-hidden');
  }, { once: true });
}

$('#grade-grid').addEventListener('click', (event) => {
  const card = event.target.closest('[data-grade]');
  if (card) selectGrade(card.dataset.grade);
});

$('#route-panel').addEventListener('click', (event) => {
  const card = event.target.closest('[data-mode]');
  if (card) {
    selectMode(card.dataset.mode);
    return;
  }
  if (event.target.closest('#start-quest')) startQuest();
});

$('#sound-toggle').addEventListener('click', () => {
  toggleSound();
  state = loadState();
  renderProgress();
  if (state.soundOn !== false) playSound('click');
});

$('#reset-progress').addEventListener('click', () => {
  const ok = window.confirm('立式の旅の学習記録をリセットしますか？');
  if (!ok) return;
  state = resetProgress();
  selectedGrade = 1;
  selectedMode = 'mixed';
  renderProgress();
  renderGrades();
  renderRoutes();
});

attachImageFallback($('#hero-art-img'));
document.querySelectorAll('.journey-note img').forEach(attachImageFallback);
renderProgress();
renderGrades();
renderRoutes();
