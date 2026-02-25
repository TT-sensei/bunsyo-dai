// ========================================
// 無限生成用テンプレートデータ
// ========================================
const questTemplates = [

  // =========================
  // 🌱 1年生
  // =========================
  {
    id: "g1_add_increase",
    grade: 1,
    operation: "add",
    type: "increase",
    template: "{item}が {num1}{unit} あります。{num2}{unit} {increaseWord}。ぜんぶで なん{unit}？",
    keywords: ["ぜんぶで"],
    items: ["あめ", "りんご", "ビー玉", "けしゴム", "おはじき"],
    unit: "こ",
    increaseWords: ["もらいました", "ふえました", "ひろいました"],
    num1Range: [1, 9],
    num2Range: [1, 9]
  },
  {
    id: "g1_sub_decrease",
    grade: 1,
    operation: "sub",
    type: "decrease",
    template: "{item}が {num1}{unit} あります。{num2}{unit} {decreaseWord}。のこりは なん{unit}？",
    keywords: ["のこり"],
    items: ["あめ", "りんご", "えんぴつ", "おはじき"],
    unit: "こ",
    decreaseWords: ["つかいました", "あげました", "なくしました"],
    num1Range: [3, 15],
    num2Range: [1, 9]
  },
  {
    id: "g1_add_combine",
    grade: 1,
    operation: "add",
    type: "combine",
    template: "{item1}が {num1}{unit}、{item2}が {num2}{unit} あります。あわせて なん{unit}？",
    keywords: ["あわせて"],
    items1: ["あかいはな", "ねこ", "りんご"],
    items2: ["しろいはな", "いぬ", "みかん"],
    unit: "こ",
    num1Range: [1, 9],
    num2Range: [1, 9]
  },

  // =========================
  // 🌿 2年生
  // =========================
  {
    id: "g2_mul_groups",
    grade: 2,
    operation: "mul",
    type: "groups",
    template: "{num1}{unit}ずつ {num2}こ あります。ぜんぶで なん{unit}？",
    keywords: ["ずつ", "ぜんぶで"],
    unit: "こ",
    num1Range: [2, 9],
    num2Range: [2, 9]
  },
  {
    id: "g2_add_increase",
    grade: 2,
    operation: "add",
    type: "increase",
    template: "{place}に {num1}{unit} います。あと {num2}{unit} きました。ぜんぶで なん{unit}？",
    keywords: ["あと", "ぜんぶで"],
    places: ["こうえん", "きょうしつ", "こうてい"],
    unit: "にん",
    num1Range: [10, 50],
    num2Range: [10, 40]
  },
  {
    id: "g2_sub_difference",
    grade: 2,
    operation: "sub",
    type: "difference",
    template: "{num1}{unit} のうち {num2}{unit} やすみです。きているのは なん{unit}？",
    keywords: ["やすみ", "きている"],
    unit: "にん",
    num1Range: [15, 40],
    num2Range: [1, 15]
  },

  // =========================
  // 🌳 3年生
  // =========================
  {
    id: "g3_div_sharing",
    grade: 3,
    operation: "div",
    type: "sharing",
    template: "{item}が {num1}{unit} あります。{num2}{unit2}で おなじずつ わけます。ひとり なん{unit}？",
    keywords: ["おなじずつ", "ひとり"],
    items: ["クッキー", "あめ", "カード"],
    unit: "こ",
    unit2: "にん",
    num1Range: [12, 36], // ※わりざんは自動調整されるので目安です
    num2Range: [2, 9]
  },
  {
    id: "g3_mul_boxes",
    grade: 3,
    operation: "mul",
    type: "groups",
    template: "1はこに {num1}{unit} ずつ はいっています。{num2}はこ あります。ぜんぶで なん{unit}？",
    keywords: ["ずつ", "ぜんぶで"],
    unit: "こ",
    num1Range: [3, 9],
    num2Range: [2, 9]
  },
  {
    id: "g3_sub_remain",
    grade: 3,
    operation: "sub",
    type: "remain",
    template: "{num1}{unit} のうち {num2}{unit} つかいました。のこりは なん{unit}？",
    keywords: ["つかいました", "のこり"],
    unit: "こ",
    num1Range: [20, 99],
    num2Range: [5, 50]
  }
];

// ========================================
// 問題生成エンジン（スマート処理搭載）
// ========================================

function random(range) {
  return Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
}

function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateQuestion(template) {
  let num1, num2, answer;

  // 1. わりざんの「あまり回避」処理
  if (template.operation === "div") {
    num2 = random(template.num2Range);
    answer = random([2, 9]); // 答えを先に決める（九九の範囲）
    num1 = num2 * answer;    // きれいに割り切れるようにnum1を逆算
  } 
  // 2. それ以外の演算
  else {
    num1 = random(template.num1Range);
    num2 = random(template.num2Range);

    // ひきざんの「マイナス回避」処理（num1が小さい場合は入れ替える）
    if (template.operation === "sub" && num1 < num2) {
      let temp = num1;
      num1 = num2;
      num2 = temp;
    }
    // 同じ数字を引いて「0」になるのを避ける（好みで外してもOK）
    if (template.operation === "sub" && num1 === num2) {
      num1 += random([1, 5]); 
    }

    if (template.operation === "add") answer = num1 + num2;
    if (template.operation === "sub") answer = num1 - num2;
    if (template.operation === "mul") answer = num1 * num2;
  }

  // 3. 文章の組み立て（すべて replaceAll に変更！）
  let text = template.template;
  if(template.items) text = text.replaceAll("{item}", choice(template.items));
  if(template.items1) text = text.replaceAll("{item1}", choice(template.items1));
  if(template.items2) text = text.replaceAll("{item2}", choice(template.items2));
  if(template.places) text = text.replaceAll("{place}", choice(template.places));
  if(template.increaseWords) text = text.replaceAll("{increaseWord}", choice(template.increaseWords));
  if(template.decreaseWords) text = text.replaceAll("{decreaseWord}", choice(template.decreaseWords));
  if(template.unit) text = text.replaceAll("{unit}", template.unit);
  if(template.unit2) text = text.replaceAll("{unit2}", template.unit2);

  text = text
    .replaceAll("{num1}", num1)
    .replaceAll("{num2}", num2);

  // 4. データ構造として返す
  return {
    id: template.id + "_" + Date.now(), // 復習用にかぶらないIDをつける
    grade: template.grade,
    operation: template.operation,
    text: text,
    answer: answer,
    keywords: template.keywords,
    num1: num1,
    num2: num2
  };
}
