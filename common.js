const fallbackEvents = {
  CORRECT: 'edu:correct',
  WRONG: 'edu:wrong',
  COMPLETE: 'edu:complete',
  LEVEL_CHANGE: 'edu:levelchange',
  STORAGE_SAVE: 'edu:storagesave'
};

class FallbackStorageManager {
  constructor(namespace) {
    this.namespace = namespace;
    this.prefix = 'edu:' + namespace + ':';
  }
  key(key) {
    return this.prefix + key;
  }
  save(key, value) {
    try {
      localStorage.setItem(this.key(key), JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }
  load(key, fallback = null) {
    try {
      const raw = localStorage.getItem(this.key(key));
      return raw === null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  }
  has(key) {
    try {
      return localStorage.getItem(this.key(key)) !== null;
    } catch {
      return false;
    }
  }
  clear() {
    const targets = [];
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (key && key.startsWith(this.prefix)) targets.push(key);
    }
    targets.forEach((key) => localStorage.removeItem(key));
    return targets.length;
  }
}

class FallbackAnswerChecker {
  matches(answer, correct, options = {}) {
    const values = Array.isArray(correct) ? correct : [correct];
    if (options.numeric) {
      return values.some((value) => String(answer).trim() !== '' && Number(answer) === Number(value));
    }
    return values.some((value) => String(answer).trim().toLowerCase() === String(value).trim().toLowerCase());
  }
  check(answer, correct, options = {}) {
    return this.matches(answer, correct, options);
  }
}

class FallbackQuestionPool {
  constructor(items = []) {
    this.items = [...items];
    this.used = new Set();
  }
  next() {
    const candidates = this.items.filter((item) => !this.used.has(item));
    if (!candidates.length) return null;
    const item = candidates[Math.floor(Math.random() * candidates.length)];
    this.used.add(item);
    return item;
  }
}

const kitPromise = import('https://tt-sensei.github.io/edu-components/index.js').catch(() => ({
  StorageManager: FallbackStorageManager,
  AnswerChecker: FallbackAnswerChecker,
  QuestionPool: FallbackQuestionPool,
  EDU_EVENTS: fallbackEvents
}));

const soundPromise = import('https://tt-sensei.github.io/sounds-recipe-/sounds.js')
  .catch(() => ({ soundList: [] }));

const kit = await kitPromise;
const soundModule = await soundPromise;

export const EDU_EVENTS = kit.EDU_EVENTS || fallbackEvents;
export const StorageManager = kit.StorageManager || FallbackStorageManager;
export const AnswerChecker = kit.AnswerChecker || FallbackAnswerChecker;
export const QuestionPool = kit.QuestionPool || FallbackQuestionPool;

export const FANTASY = {
  base: 'https://tt-sensei.github.io/navi-character-/assets/web/fantasy',
  groups: {
    adventure: 'https://tt-sensei.github.io/navi-character-/assets/web/fantasy/groups/group-fantasy-adventure.webp',
    training: 'https://tt-sensei.github.io/navi-character-/assets/web/fantasy/groups/group-fantasy-training.webp',
    celebration: 'https://tt-sensei.github.io/navi-character-/assets/web/fantasy/groups/group-fantasy-celebration.webp'
  },
  backgrounds: {
    forest: 'https://tt-sensei.github.io/navi-character-/assets/web/fantasy/backgrounds/forest.webp',
    grassland: 'https://tt-sensei.github.io/navi-character-/assets/web/fantasy/backgrounds/grassland.webp',
    riverbank: 'https://tt-sensei.github.io/navi-character-/assets/web/fantasy/backgrounds/riverbank.webp',
    town: 'https://tt-sensei.github.io/navi-character-/assets/web/fantasy/backgrounds/town.webp',
    ruins: 'https://tt-sensei.github.io/navi-character-/assets/web/fantasy/backgrounds/ruins.webp',
    cave: 'https://tt-sensei.github.io/navi-character-/assets/web/fantasy/backgrounds/cave.webp',
    'sky-island': 'https://tt-sensei.github.io/navi-character-/assets/web/fantasy/backgrounds/sky-island.webp'
  },
  characters: {
    sora: 'https://tt-sensei.github.io/navi-character-/assets/web/fantasy/sora-swordsman.webp',
    kai: 'https://tt-sensei.github.io/navi-character-/assets/web/fantasy/kai-mage.webp',
    nami: 'https://tt-sensei.github.io/navi-character-/assets/web/fantasy/nami-guardian-knight.webp',
    saku: 'https://tt-sensei.github.io/navi-character-/assets/web/fantasy/saku-cleric-healer.webp'
  }
};

export const storage = new StorageManager('bunsyo-dai', { eventTarget: document });

const defaultState = () => ({
  version: 2,
  solved: 0,
  formulaSolved: 0,
  viewed: 0,
  attempts: 0,
  fragments: 0,
  answerHelped: 0,
  level: 1,
  exp: 0,
  soundOn: true,
  mistakes: [],
  seals: [],
  operationSolved: { add: 0, sub: 0, mul: 0, div: 0 },
  templateStats: {}
});

const legacyTemplateAliases = {
  g1_add_increase: 'g1-add-increase',
  g1_sub_decrease: 'g1-sub-decrease',
  g1_add_combine: 'g1-add-combine',
  g1_sub_compare: 'g1-sub-compare',
  g2_mul_groups: 'g2-mul-groups',
  g2_mul_rows: 'g2-mul-rows',
  g2_add_increase: 'g2-add-arrival',
  g2_sub_difference: 'g2-sub-remaining',
  g3_div_sharing: 'g3-div-sharing',
  g3_div_perbox: 'g3-div-perbox',
  g3_mul_boxes: 'g3-mul-boxes',
  g3_sub_remain: 'g3-sub-large',
  g3_add_large: 'g3-add-large'
};

function normalizeMistakes(values) {
  if (!Array.isArray(values)) return [];
  return values.map((item) => {
    if (typeof item === 'string') {
      return { templateId: legacyTemplateAliases[item] || item };
    }
    const templateId = item && item.templateId;
    return {
      ...(item || {}),
      templateId: legacyTemplateAliases[templateId] || templateId
    };
  }).filter((item) => item.templateId);
}

function readLegacy(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function normalizeState(saved) {
  const result = { ...defaultState(), ...(saved || {}) };
  result.operationSolved = {
    ...defaultState().operationSolved,
    ...(saved && saved.operationSolved ? saved.operationSolved : {})
  };
  result.mistakes = normalizeMistakes(result.mistakes);
  result.answerHelped = Number(result.answerHelped) || 0;
  result.seals = Array.isArray(result.seals) ? result.seals : [];
  result.templateStats = result.templateStats && typeof result.templateStats === 'object'
    ? result.templateStats
    : {};
  return result;
}

export function loadState() {
  const saved = storage.load('profile', null);
  if (saved) return normalizeState(saved);

  const migrated = normalizeState({
    solved: Number(readLegacy('saved_solved_count', 0)) || 0,
    level: Number(readLegacy('saved_level', 1)) || 1,
    exp: Number(readLegacy('saved_exp', 0)) || 0,
    mistakes: readLegacy('saved_mistakes', [])
  });
  storage.save('profile', migrated);
  storage.save('mistakes', migrated.mistakes);
  return migrated;
}

export function saveState(state) {
  const normalized = normalizeState(state);
  storage.save('profile', normalized);
  storage.save('mistakes', normalized.mistakes);
  // 旧版の記録も残し、以前のURLやデータを持つ環境から続けられるようにする。
  try {
    localStorage.setItem('saved_solved_count', JSON.stringify(normalized.solved));
    localStorage.setItem('saved_level', JSON.stringify(normalized.level));
    localStorage.setItem('saved_exp', JSON.stringify(normalized.exp));
    localStorage.setItem('saved_mistakes', JSON.stringify(normalized.mistakes));
  } catch {
    // 保存できない環境でも、教材の進行は止めない。
  }
  return normalized;
}

export function emitEdu(eventName, detail = {}) {
  try {
    document.dispatchEvent(new CustomEvent(eventName, { detail }));
  } catch {
    // 補助イベントの失敗で学習本体を止めない。
  }
}

export function addMistake(question) {
  const state = loadState();
  if (!state.mistakes.some((item) => item.templateId === question.templateId)) {
    state.mistakes.push({
      templateId: question.templateId,
      grade: question.grade,
      operation: question.operation
    });
    saveState(state);
  }
  return state;
}

export function removeMistake(templateId) {
  const state = loadState();
  state.mistakes = state.mistakes.filter((item) => item.templateId !== templateId);
  return saveState(state);
}

export function recordCorrect(question, options = {}) {
  const state = loadState();
  const previousLevel = state.level;
  state.solved += 1;
  state.formulaSolved += 1;
  state.fragments += 1;
  if (options.answerHelped) state.answerHelped += 1;
  state.attempts += 1;
  state.operationSolved[question.operation] = (state.operationSolved[question.operation] || 0) + 1;
  state.exp += (options.answerHelped || options.hintUsed) ? 1 : 2;
  const templateStat = state.templateStats[question.templateId] || { correct: 0, total: 0 };
  templateStat.correct += 1;
  templateStat.total += 1;
  state.templateStats[question.templateId] = templateStat;

  while (state.exp >= 10) {
    state.exp -= 10;
    state.level += 1;
  }

  const milestones = [5, 10, 20, 40, 80, 120];
  const newSeals = [];
  milestones.forEach((milestone) => {
    if (state.solved >= milestone && !state.seals.includes(milestone)) {
      state.seals.push(milestone);
      newSeals.push(milestone);
    }
  });
  state.mistakes = state.mistakes.filter((item) => item.templateId !== question.templateId);
  const saved = saveState(state);
  emitEdu(EDU_EVENTS.CORRECT, { question, answer: question.answer, type: 'answer' });
  if (saved.level !== previousLevel) {
    emitEdu(EDU_EVENTS.LEVEL_CHANGE, {
      previous: previousLevel,
      current: saved.level
    });
  }
  if (newSeals.length) {
    emitEdu(EDU_EVENTS.COMPLETE, { type: 'seal', values: newSeals });
  }
  return { state: saved, levelUp: saved.level !== previousLevel, newSeals };
}

export function recordViewed() {
  const state = loadState();
  state.viewed += 1;
  return saveState(state);
}

export function resetProgress() {
  storage.clear();
  ['saved_solved_count', 'saved_level', 'saved_exp', 'saved_mistakes', 'saved_pending_items'].forEach((key) => {
    try { localStorage.removeItem(key); } catch {}
  });
  return defaultState();
}

let audioContext = null;
const soundList = soundModule.soundList || [];

export async function playSound(id) {
  const state = loadState();
  if (state.soundOn === false || !soundList.length) return false;
  try {
    if (!audioContext) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return false;
      audioContext = new AudioContextClass();
    }
    if (audioContext.state === 'suspended') await audioContext.resume();
    const recipe = soundList.find((item) => item.id === id);
    if (!recipe) return false;
    recipe.play(audioContext, 0.18);
    return true;
  } catch {
    return false;
  }
}

export function toggleSound() {
  const state = loadState();
  state.soundOn = state.soundOn === false;
  saveState(state);
  return state.soundOn;
}
