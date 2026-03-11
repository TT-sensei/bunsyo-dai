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
  {
    id: "g1_sub_compare",
    grade: 1,
    operation: "sub",
    type: "compare",
    template: "{item1}が {num1}{unit}、{item2}が {num2}{unit} あります。どちらが なん{unit} おおい？",
    keywords: ["どちらが", "おおい"],
    items1: ["あかい ふうせん", "ねこ", "りんご"],
    items2: ["しろい ふうせん", "いぬ", "みかん"],
    unit: "こ",
    num1Range: [3, 9],
    num2Range: [1, 8]
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
    id: "g2_mul_rows",
    grade: 2,
    operation: "mul",
    type: "groups",
    template: "{item}が {num1}れつに {num2}{unit}ずつ ならんでいます。ぜんぶで なん{unit}？",
    keywords: ["ずつ", "ぜんぶで"],
    items: ["いす", "りんご", "本"],
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
    num2Range: [1, 14]
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
    num1Range: [12, 36],
    num2Range: [2, 9]
  },
  {
    id: "g3_div_perbox",
    grade: 3,
    operation: "div",
    type: "sharing",
    template: "{item}が {num1}{unit} あります。{num2}はこに おなじずつ いれます。1はこ なん{unit}？",
    keywords: ["おなじずつ", "1はこ"],
    items: ["みかん", "ボール", "本"],
    unit: "こ",
    num1Range: [12, 45],
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
    // ※ num1 > num2 が保証されるよう generateQuestion 内で処理
    template: "{item}が {num1}{unit} あります。{num2}{unit} つかいました。のこりは なん{unit}？",
    keywords: ["つかいました", "のこり"],
    items: ["シール", "カード", "折り紙"],
    unit: "まい",
    num1Range: [20, 99],
    num2Range: [5, 19]   // ← num2の上限を下げて矛盾しにくく
  },
  {
    id: "g3_add_large",
    grade: 3,
    operation: "add",
    type: "increase",
    template: "{place}で {num1}{unit} あつめました。つぎの日に {num2}{unit} あつめました。ぜんぶで なん{unit}？",
    keywords: ["ぜんぶで"],
    places: ["もり", "こうえん", "やま"],
    unit: "まい",
    num1Range: [20, 80],
    num2Range: [10, 50]
  }
];

// ========================================
// 問題生成エンジン
// ========================================

function random(range) {
  return Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
}

function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateQuestion(template) {
  let num1, num2, answer;

  // わりざん：答えを先に決めて割り切れる数を逆算
  if (template.operation === "div") {
    num2   = random(template.num2Range);
    answer = random([2, 9]);
    num1   = num2 * answer;
  }
  else {
    num1 = random(template.num1Range);
    num2 = random(template.num2Range);

    // ひきざん：マイナス回避
    if (template.operation === "sub") {
      // num1 が確実に num2 より大きくなるよう再計算
      // num1Range の最小値 > num2Range の最大値 でない場合は入れ替え or 再抽選
      if (num1 <= num2) {
        // num1 を num2 より大きい値に強制
        num1 = num2 + random([1, 5]);
        // num1Range の上限を超えないようにクランプ
        if (template.num1Range && num1 > template.num1Range[1]) {
          num1 = template.num1Range[1];
          // それでも num1 <= num2 なら num2 を小さくする
          if (num1 <= num2) num2 = num1 - 1;
        }
      }
    }

    if (template.operation === "add") answer = num1 + num2;
    if (template.operation === "sub") answer = num1 - num2;
    if (template.operation === "mul") answer = num1 * num2;
  }

  // 文章の組み立て
  let text = template.template;
  if (template.items)        text = text.replaceAll("{item}",        choice(template.items));
  if (template.items1)       text = text.replaceAll("{item1}",       choice(template.items1));
  if (template.items2)       text = text.replaceAll("{item2}",       choice(template.items2));
  if (template.places)       text = text.replaceAll("{place}",       choice(template.places));
  if (template.increaseWords)text = text.replaceAll("{increaseWord}",choice(template.increaseWords));
  if (template.decreaseWords)text = text.replaceAll("{decreaseWord}",choice(template.decreaseWords));
  if (template.unit)         text = text.replaceAll("{unit}",        template.unit);
  if (template.unit2)        text = text.replaceAll("{unit2}",       template.unit2);

  text = text
    .replaceAll("{num1}", num1)
    .replaceAll("{num2}", num2);

  return {
    templateId: template.id,   // まちがい記録に使うIDはtemplate.id固定
    id:         template.id + "_" + Date.now(),
    grade:      template.grade,
    operation:  template.operation,
    text:       text,
    answer:     answer,
    keywords:   template.keywords,
    num1:       num1,
    num2:       num2
  };
}
