// 文章題の「場面」と「式の形」を結びつける教材データ
// 学習の中心は、文章を読んで num1 / operation / num2 の関係を立式すること。

export const operationMeta = {
  add: { label: 'たし算', symbol: '＋', color: 'mint', icon: '＋' },
  sub: { label: 'ひき算', symbol: '−', color: 'coral', icon: '−' },
  mul: { label: 'かけ算', symbol: '×', color: 'violet', icon: '×' },
  div: { label: 'わり算', symbol: '÷', color: 'amber', icon: '÷' }
};

export const gradeMeta = {
  1: {
    label: '1年生',
    subtitle: 'あわせる・ふえる・のこり・くらべる',
    description: '20までの数の場面から、たし算・ひき算の式を見つけます。',
    operations: ['add', 'sub'],
    color: 'mint'
  },
  2: {
    label: '2年生',
    subtitle: '大きな数・かけ算の場面',
    description: '100までのたし算・ひき算と、かけ算の式を練習します。',
    operations: ['add', 'sub', 'mul'],
    color: 'blue'
  },
  3: {
    label: '3年生',
    subtitle: 'かけ算・わり算・大きな数',
    description: 'かけ算・わり算を中心に、数量の関係を式にします。',
    operations: ['add', 'sub', 'mul', 'div'],
    color: 'violet'
  }
};

const t = (data) => ({
  scene: 'forest',
  difficulty: 1,
  unit: 'こ',
  keywords: [],
  formulaText: '',
  reason: '',
  ...data
});

export const questionTemplates = [
  // 1年生：たし算・ひき算
  t({
    id: 'g1-add-increase',
    grade: 1,
    operation: 'add',
    typeLabel: 'ふえる',
    scene: 'forest',
    template: '{item}が {num1}{unit} あります。あと {num2}{unit} もらいました。ぜんぶで なん{unit}？',
    items: ['あめ', 'りんご', 'どんぐり', '星のかけら'],
    num1Range: [1, 9],
    num2Range: [1, 9],
    keywords: ['あと', 'ぜんぶで'],
    formulaText: 'もとの数 ＋ ふえた数',
    reason: 'もともとあった数に、あとからふえた数を合わせます。'
  }),
  t({
    id: 'g1-add-combine',
    grade: 1,
    operation: 'add',
    typeLabel: 'あわせる',
    scene: 'grassland',
    template: '{item1}が {num1}{unit}、{item2}が {num2}{unit} あります。あわせて なん{unit}？',
    items1: ['あかい花', '青い羽', '小さな石'],
    items2: ['しろい花', '金の羽', 'きれいな貝'],
    num1Range: [1, 9],
    num2Range: [1, 9],
    keywords: ['あわせて'],
    formulaText: '一方の数 ＋ もう一方の数',
    reason: '二つのまとまりを一つにするので、たし算です。'
  }),
  t({
    id: 'g1-add-arrival',
    grade: 1,
    operation: 'add',
    typeLabel: 'くる',
    scene: 'town',
    template: '{place}に {num1}{unit2} います。あと {num2}{unit2} きました。ぜんぶで なん{unit2}？',
    places: ['広場', '森の入口', 'おしろ'],
    unit2: '人',
    num1Range: [1, 9],
    num2Range: [1, 9],
    keywords: ['あと', 'きました', 'ぜんぶで'],
    formulaText: 'はじめの人数 ＋ きた人数',
    reason: '人があとから来たので、はじめの人数にたします。'
  }),
  t({
    id: 'g1-add-find',
    grade: 1,
    operation: 'add',
    typeLabel: 'みつける',
    scene: 'riverbank',
    template: '川のそばで {num1}{unit} みつけました。つぎに {num2}{unit} みつけました。ぜんぶで なん{unit}？',
    num1Range: [1, 9],
    num2Range: [1, 9],
    keywords: ['つぎに', 'ぜんぶで'],
    formulaText: '先に見つけた数 ＋ 次に見つけた数',
    reason: '見つけた数を二回分合わせます。'
  }),
  t({
    id: 'g1-add-prepare',
    grade: 1,
    operation: 'add',
    typeLabel: 'そろえる',
    scene: 'town',
    template: 'ぼうけんの道具を {num1}{unit} もっています。{num2}{unit} じゅんびしました。ぜんぶで なん{unit}？',
    num1Range: [1, 9],
    num2Range: [1, 9],
    keywords: ['じゅんびしました', 'ぜんぶで'],
    formulaText: 'もっている数 ＋ じゅんびした数',
    reason: '道具がふえたので、たし算で全部を求めます。'
  }),
  t({
    id: 'g1-sub-decrease',
    grade: 1,
    operation: 'sub',
    typeLabel: 'のこり',
    scene: 'forest',
    template: '{item}が {num1}{unit} あります。{num2}{unit} つかいました。のこりは なん{unit}？',
    items: ['シール', 'カード', '木の実', '星のかけら'],
    num1Range: [5, 15],
    num2Range: [1, 9],
    keywords: ['つかいました', 'のこり'],
    formulaText: 'はじめの数 − つかった数',
    reason: 'はじめにあった数から、つかった数をひきます。'
  }),
  t({
    id: 'g1-sub-give',
    grade: 1,
    operation: 'sub',
    typeLabel: 'わたす',
    scene: 'grassland',
    template: '{item}を {num1}{unit} もっています。ともだちに {num2}{unit} あげました。のこりは なん{unit}？',
    items: ['えんぴつ', 'おはじき', '木のぼう'],
    num1Range: [5, 15],
    num2Range: [1, 9],
    keywords: ['あげました', 'のこり'],
    formulaText: 'もっていた数 − あげた数',
    reason: 'わたした分だけ、手元の数がへります。'
  }),
  t({
    id: 'g1-sub-compare',
    grade: 1,
    operation: 'sub',
    typeLabel: 'くらべる',
    scene: 'riverbank',
    template: '赤い石は {num1}{unit}、青い石は {num2}{unit} あります。赤い石は なん{unit} おおい？',
    num1Range: [5, 15],
    num2Range: [1, 9],
    keywords: ['なん', 'おおい'],
    formulaText: '多い方の数 − 少ない方の数',
    reason: '二つの数のちがいをくらべるので、ひき算です。'
  }),
  t({
    id: 'g1-sub-goaway',
    grade: 1,
    operation: 'sub',
    typeLabel: 'かえる',
    scene: 'town',
    template: '広場に {num1}人 いました。{num2}人 かえりました。のこっているのは なん人？',
    num1Range: [5, 15],
    num2Range: [1, 9],
    keywords: ['かえりました', 'のこっている'],
    formulaText: 'はじめの人数 − かえった人数',
    reason: '帰った人数を、はじめの人数からひきます。'
  }),
  t({
    id: 'g1-sub-use',
    grade: 1,
    operation: 'sub',
    typeLabel: 'つかう',
    scene: 'cave',
    template: '宝箱に {num1}まい のカードがありました。{num2}まい つかいました。のこりは なんまい？',
    num1Range: [5, 15],
    num2Range: [1, 9],
    keywords: ['つかいました', 'のこり'],
    formulaText: 'はじめの枚数 − つかった枚数',
    reason: 'つかった分だけ、残りの枚数がへります。'
  }),

  // 2年生：大きな数・かけ算
  t({
    id: 'g2-add-arrival',
    grade: 2,
    operation: 'add',
    typeLabel: 'ふえる',
    scene: 'town',
    template: '{place}に {num1}{unit2} います。あと {num2}{unit2} きました。ぜんぶで なん{unit2}？',
    places: ['広場', '学校', 'おしろの門'],
    unit2: '人',
    num1Range: [10, 50],
    num2Range: [10, 40],
    keywords: ['あと', 'きました', 'ぜんぶで'],
    formulaText: 'はじめの人数 ＋ きた人数',
    reason: 'あとから来た人数を、はじめの人数にたします。'
  }),
  t({
    id: 'g2-add-money',
    grade: 2,
    operation: 'add',
    typeLabel: 'あわせる',
    scene: 'town',
    template: '道具を買うために {num1}円 もっています。{num2}円 もらいました。ぜんぶで なん円？',
    num1Range: [20, 80],
    num2Range: [10, 80],
    keywords: ['もらいました', 'ぜんぶで'],
    formulaText: 'もっていたお金 ＋ もらったお金',
    reason: 'お金がふえたので、二つの金額を合わせます。'
  }),
  t({
    id: 'g2-add-books',
    grade: 2,
    operation: 'add',
    typeLabel: '集める',
    scene: 'ruins',
    template: '図書室で本を {num1}さつ 読みました。つぎの日に {num2}さつ 読みました。ぜんぶで なんさつ？',
    num1Range: [10, 50],
    num2Range: [10, 40],
    keywords: ['つぎの日', 'ぜんぶで'],
    formulaText: '一日目の冊数 ＋ 二日目の冊数',
    reason: '二日分の冊数を合わせて求めます。'
  }),
  t({
    id: 'g2-sub-remaining',
    grade: 2,
    operation: 'sub',
    typeLabel: 'のこり',
    scene: 'forest',
    template: '森で {num1}まい の葉を集めました。{num2}まい かざりに使いました。のこりは なんまい？',
    num1Range: [30, 90],
    num2Range: [10, 40],
    keywords: ['使いました', 'のこり'],
    formulaText: '集めた枚数 − 使った枚数',
    reason: '使った枚数を、集めた枚数からひきます。'
  }),
  t({
    id: 'g2-sub-money',
    grade: 2,
    operation: 'sub',
    typeLabel: 'つかう',
    scene: 'town',
    template: '{num1}円 もっていました。{num2}円 の道具を買いました。のこりは なん円？',
    num1Range: [40, 100],
    num2Range: [10, 60],
    keywords: ['買いました', 'のこり'],
    formulaText: 'もっていた金額 − 使った金額',
    reason: '買い物で使った金額を、もとの金額からひきます。'
  }),
  t({
    id: 'g2-sub-compare',
    grade: 2,
    operation: 'sub',
    typeLabel: 'くらべる',
    scene: 'grassland',
    template: 'そらの道は {num1}m、りくの道は {num2}m です。そらの道は なんm ながい？',
    num1Range: [30, 90],
    num2Range: [10, 60],
    keywords: ['なんm', 'ながい'],
    formulaText: '長い方の長さ − 短い方の長さ',
    reason: '二つの長さの差をくらべます。'
  }),
  t({
    id: 'g2-mul-groups',
    grade: 2,
    operation: 'mul',
    typeLabel: '同じ数ずつ',
    scene: 'forest',
    template: '1人に {num1}まいずつ 地図をくばります。{num2}人 います。地図は ぜんぶで なんまい？',
    num1Range: [2, 9],
    num2Range: [2, 9],
    keywords: ['1人に', 'ずつ', 'ぜんぶで'],
    formulaText: '1人分の数 × 人数',
    reason: '同じ数ずつ、いくつ分かあるので、かけ算です。'
  }),
  t({
    id: 'g2-mul-rows',
    grade: 2,
    operation: 'mul',
    typeLabel: 'ならべる',
    scene: 'grassland',
    template: '旗を 1れつに {num1}本ずつ 立てます。{num2}れつ あります。旗は ぜんぶで なん本？',
    num1Range: [2, 9],
    num2Range: [2, 9],
    keywords: ['1れつに', 'ずつ', 'れつ'],
    formulaText: '1れつ分の本数 × れつ数',
    reason: '同じ本数のまとまりが、れつ数分あります。'
  }),
  t({
    id: 'g2-mul-boxes',
    grade: 2,
    operation: 'mul',
    typeLabel: 'はこに入れる',
    scene: 'cave',
    template: '1はこに {num1}こずつ 宝石を入れます。{num2}はこ あります。宝石は ぜんぶで なんこ？',
    num1Range: [2, 9],
    num2Range: [2, 9],
    keywords: ['1はこに', 'ずつ', 'はこ'],
    formulaText: '1はこ分の数 × はこ数',
    reason: '同じ数のはこがいくつ分かあるので、かけ算です。'
  }),
  t({
    id: 'g2-mul-days',
    grade: 2,
    operation: 'mul',
    typeLabel: '毎日同じ',
    scene: 'riverbank',
    template: '毎日 {num1}こずつ 石をひろいます。{num2}日 ひろうと、ぜんぶで なんこ？',
    num1Range: [2, 9],
    num2Range: [2, 9],
    keywords: ['毎日', 'ずつ', '日'],
    formulaText: '1日分の数 × 日数',
    reason: '同じ数を何日分か集めるので、かけ算です。'
  }),

  // 3年生：大きな数・かけ算・わり算
  t({
    id: 'g3-add-large',
    grade: 3,
    operation: 'add',
    typeLabel: 'あわせる',
    scene: 'grassland',
    template: '午前に {num1}人、午後に {num2}人 が見学に来ました。ぜんぶで なん人？',
    num1Range: [100, 800],
    num2Range: [100, 600],
    keywords: ['午前に', '午後に', 'ぜんぶで'],
    formulaText: '午前の人数 ＋ 午後の人数',
    reason: '午前と午後の人数を合わせます。'
  }),
  t({
    id: 'g3-sub-large',
    grade: 3,
    operation: 'sub',
    typeLabel: 'のこり',
    scene: 'ruins',
    template: '遺跡に {num1}人 入りました。{num2}人 出ていきました。のこっているのは なん人？',
    num1Range: [200, 900],
    num2Range: [100, 500],
    keywords: ['出ていきました', 'のこっている'],
    formulaText: '入った人数 − 出た人数',
    reason: '出ていった人数を、はじめに入った人数からひきます。'
  }),
  t({
    id: 'g3-add-distance',
    grade: 3,
    operation: 'add',
    typeLabel: 'つなぐ',
    scene: 'riverbank',
    template: '森の道を {num1}m、川の道を {num2}m 歩きました。歩いた道のりは ぜんぶで なんm？',
    num1Range: [100, 800],
    num2Range: [100, 600],
    keywords: ['森の道', '川の道', 'ぜんぶで'],
    formulaText: '森の道のり ＋ 川の道のり',
    reason: '二つの道のりをつなげて、全部の道のりを求めます。'
  }),
  t({
    id: 'g3-sub-compare',
    grade: 3,
    operation: 'sub',
    typeLabel: 'くらべる',
    scene: 'sky-island',
    template: '高い塔は {num1}m、低い塔は {num2}m です。高さのちがいは なんm？',
    num1Range: [300, 900],
    num2Range: [100, 700],
    keywords: ['高さのちがい'],
    formulaText: '高い方の高さ − 低い方の高さ',
    reason: '二つの高さの差をくらべるので、ひき算です。'
  }),
  t({
    id: 'g3-mul-boxes',
    grade: 3,
    operation: 'mul',
    typeLabel: '同じ数ずつ',
    scene: 'cave',
    template: '1つの箱に {num1}こずつ クリスタルが入っています。{num2}箱 あります。クリスタルは ぜんぶで なんこ？',
    num1Range: [3, 9],
    num2Range: [2, 9],
    keywords: ['1つの箱に', 'ずつ', '箱'],
    formulaText: '1箱分の数 × 箱数',
    reason: '1箱分の同じ数が、箱数分あるので、かけ算です。'
  }),
  t({
    id: 'g3-mul-tickets',
    grade: 3,
    operation: 'mul',
    typeLabel: '何倍分',
    scene: 'town',
    template: '1まい {num1}円 の入場券を、{num2}まい 買いました。代金は ぜんぶで なん円？',
    num1Range: [3, 9],
    num2Range: [2, 9],
    keywords: ['1まい', 'まい', '代金'],
    formulaText: '1まい分の値段 × 枚数',
    reason: '同じ値段の入場券を、枚数分買います。'
  }),
  t({
    id: 'g3-mul-rows',
    grade: 3,
    operation: 'mul',
    typeLabel: 'ならべる',
    scene: 'forest',
    template: '薬草を {num1}列に、1列 {num2}本ずつ ならべます。薬草は ぜんぶで なん本？',
    num1Range: [2, 9],
    num2Range: [3, 9],
    keywords: ['列に', '1列', 'ずつ'],
    formulaText: '列数 × 1列分の本数',
    reason: '同じ本数の列が、列数分あるので、かけ算です。'
  }),
  t({
    id: 'g3-mul-days',
    grade: 3,
    operation: 'mul',
    typeLabel: '何日分',
    scene: 'town',
    template: '毎日 {num1}ページずつ 本を読みます。{num2}日で 何ページ読みますか？',
    num1Range: [3, 9],
    num2Range: [2, 9],
    keywords: ['毎日', 'ずつ', '日で'],
    formulaText: '1日分のページ数 × 日数',
    reason: '同じページ数を何日分か読むので、かけ算です。'
  }),
  t({
    id: 'g3-div-sharing',
    grade: 3,
    operation: 'div',
    typeLabel: '同じ数に分ける',
    scene: 'grassland',
    template: '{item}が {num1}{unit} あります。{num2}人で 同じ数ずつ分けます。1人分は なん{unit}？',
    items: ['クッキー', 'カード', '薬草'],
    num2Range: [2, 9],
    answerRange: [2, 9],
    keywords: ['同じ数ずつ', '1人分'],
    formulaText: '全部の数 ÷ 人数',
    reason: '全部の数を、人数で同じ数ずつ分けます。'
  }),
  t({
    id: 'g3-div-perbox',
    grade: 3,
    operation: 'div',
    typeLabel: '1箱分',
    scene: 'cave',
    template: '{item}が {num1}{unit} あります。{num2}箱に 同じ数ずつ入れます。1箱分は なん{unit}？',
    items: ['みかん', '宝石', '小さな石'],
    num2Range: [2, 9],
    answerRange: [2, 9],
    keywords: ['同じ数ずつ', '1箱分'],
    formulaText: '全部の数 ÷ 箱数',
    reason: '全部の数を、箱数で同じ数ずつ分けます。'
  }),
  t({
    id: 'g3-div-measure',
    grade: 3,
    operation: 'div',
    typeLabel: 'いくつ分',
    scene: 'riverbank',
    template: '{num1}cm のひもを、{num2}cmずつに切ります。何本できますか？',
    num2Range: [2, 9],
    answerRange: [2, 9],
    unit: 'cm',
    keywords: ['ずつ', '何本'],
    formulaText: '全部の長さ ÷ 1本分の長さ',
    reason: '全部の長さの中に、1本分の長さがいくつ分あるかを求めます。'
  }),
  t({
    id: 'g3-div-books',
    grade: 3,
    operation: 'div',
    typeLabel: '同じ数に分ける',
    scene: 'ruins',
    template: '本を {num1}さつ、{num2}人に 同じ数ずつ配ります。1人分は なんさつ？',
    num2Range: [2, 9],
    answerRange: [2, 9],
    unit: 'さつ',
    keywords: ['同じ数ずつ', '1人分'],
    formulaText: '全部の冊数 ÷ 人数',
    reason: '本の全部の数を、人数で同じ数ずつ分けます。'
  })
];

let questionSerial = 0;

const randomInt = (range) => {
  const min = Number(range[0]);
  const max = Number(range[1]);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const pick = (values) => values[Math.floor(Math.random() * values.length)];

function replacePlaceholders(text, template, num1, num2) {
  const replacements = {
    '{item}': template.items ? pick(template.items) : '',
    '{item1}': template.items1 ? pick(template.items1) : '',
    '{item2}': template.items2 ? pick(template.items2) : '',
    '{place}': template.places ? pick(template.places) : '',
    '{unit}': template.unit || 'こ',
    '{unit2}': template.unit2 || template.unit || '人',
    '{num1}': String(num1),
    '{num2}': String(num2)
  };
  return Object.entries(replacements).reduce(
    (result, [key, value]) => result.split(key).join(value),
    text
  );
}

function makeNumbers(template) {
  let num1;
  let num2;
  let answer;

  if (template.operation === 'div') {
    num2 = randomInt(template.num2Range);
    answer = randomInt(template.answerRange || [2, 9]);
    num1 = num2 * answer;
  } else {
    num1 = randomInt(template.num1Range);
    num2 = randomInt(template.num2Range);
    if (template.operation === 'sub') {
      let guard = 0;
      while (num1 <= num2 && guard < 50) {
        num1 = randomInt(template.num1Range);
        num2 = randomInt(template.num2Range);
        guard += 1;
      }
      if (num1 <= num2) {
        num1 = Math.max(template.num1Range[0], Math.min(template.num1Range[1], num2 + 1));
        if (num1 <= num2) num2 = Math.max(template.num2Range[0], num1 - 1);
      }
    }
    if (template.operation === 'add') answer = num1 + num2;
    if (template.operation === 'sub') answer = num1 - num2;
    if (template.operation === 'mul') answer = num1 * num2;
  }

  return { num1, num2, answer };
}

export function generateQuestion(template) {
  const numbers = makeNumbers(template);
  questionSerial += 1;
  return {
    id: template.id + '-' + questionSerial,
    templateId: template.id,
    grade: template.grade,
    operation: template.operation,
    typeLabel: template.typeLabel,
    scene: template.scene,
    text: replacePlaceholders(template.template, template, numbers.num1, numbers.num2),
    num1: numbers.num1,
    num2: numbers.num2,
    answer: numbers.answer,
    keywords: template.keywords,
    formulaText: template.formulaText,
    reason: template.reason
  };
}

export function buildSessionTemplates(templates, count = 10) {
  if (!templates.length) return [];
  const result = [];
  const shuffled = [...templates].sort(() => Math.random() - 0.5);
  for (let index = 0; index < count; index += 1) {
    const base = shuffled[index % shuffled.length];
    result.push({ ...base, sessionId: base.id + '-session-' + index });
  }
  return result;
}

export function getTemplatesFor(grade, mode, mistakeIds = []) {
  const aliases = {
    story: 'mixed',
    train_add: 'add',
    train_sub: 'sub',
    train_mul: 'mul',
    train_div: 'div',
    train_addsub: 'mixed',
    cave: 'mistakes'
  };
  const normalizedMode = aliases[mode] || mode || 'mixed';
  let result = questionTemplates.filter((template) => {
    return !grade || Number(template.grade) === Number(grade);
  });
  if (normalizedMode === 'mistakes') {
    const ids = new Set(mistakeIds);
    result = result.filter((template) => ids.has(template.id));
  } else if (['add', 'sub', 'mul', 'div'].includes(normalizedMode)) {
    result = result.filter((template) => template.operation === normalizedMode);
  }
  return result;
}

export function getModeLabel(mode) {
  const labels = {
    mixed: 'おすすめの旅',
    add: 'たし算の道',
    sub: 'ひき算の道',
    mul: 'かけ算の道',
    div: 'わり算の道',
    mistakes: 'まちがいノート'
  };
  return labels[mode] || labels.mixed;
}
