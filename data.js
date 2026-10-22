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
    items: ['あめ', 'りんご', 'どんぐり', 'ビー玉'],
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
    items1: ['あかいビー玉', 'あおいビー玉', 'きいろいビー玉'],
    items2: ['しろいビー玉', 'くろいビー玉', 'みどりのビー玉'],
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
    unit: '人',
    scene: 'town',
    template: '{place}に {num1}{unit2} います。あと {num2}{unit2} きました。ぜんぶで なん{unit2}？',
    places: ['こうえん', '森の入口', 'おしろ'],
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
    template: '川のそばで石を {num1}{unit} 見つけました。そのあと、石を {num2}{unit} 見つけました。見つけた石は あわせて なん{unit}ですか？',
    num1Range: [1, 9],
    num2Range: [1, 9],
    keywords: ['そのあと', 'あわせて'],
    formulaText: '先に見つけた数 ＋ 次に見つけた数',
    reason: '見つけた数を二回分合わせます。'
  }),
  t({
    id: 'g1-add-prepare',
    grade: 1,
    operation: 'add',
    typeLabel: 'そろえる',
    unit: 'まい',
    scene: 'town',
    template: 'ぼうけんでつかうカードを {num1}まい もっています。ともだちがカードを {num2}まい もってきました。カードは あわせて なんまい ありますか？',
    num1Range: [1, 9],
    num2Range: [1, 9],
    keywords: ['もってきました', 'あわせて'],
    formulaText: 'もっているカードの数 ＋ ともだちがもってきたカードの数',
    reason: 'ともだちがカードを持ってきたので、二人分の数をあわせます。'
  }),
  t({
    id: 'g1-sub-decrease',
    grade: 1,
    operation: 'sub',
    typeLabel: 'のこり',
    scene: 'forest',
    template: '{item}が {num1}{unit} あります。{num2}{unit} たべました。のこりは なん{unit}？',
    items: ['あめ', 'クッキー', 'グミ', 'ビスケット'],
    num1Range: [5, 15],
    num2Range: [1, 9],
    keywords: ['たべました', 'のこり'],
    formulaText: 'はじめの数 − 食べた数',
    reason: 'はじめにあった数から、食べた数をひきます。'
  }),
  t({
    id: 'g1-sub-give',
    grade: 1,
    operation: 'sub',
    typeLabel: 'わたす',
    scene: 'grassland',
    template: '{item}を {num1}{unit} もっています。そのうち {num2}{unit}を ともだちに あげました。のこりは なん{unit}？',
    items: ['おはじき', 'ビー玉', '木の実'],
    num1Range: [5, 15],
    num2Range: [1, 9],
    keywords: ['そのうち', 'あげました', 'のこり'],
    formulaText: 'もっていた数 − あげた数',
    reason: 'わたした分だけ、手元の数がへります。'
  }),
  t({
    id: 'g1-sub-compare',
    grade: 1,
    operation: 'sub',
    typeLabel: 'くらべる',
    scene: 'riverbank',
    template: '赤い石は {num1}{unit}、青い石は {num2}{unit} あります。赤い石は 青い石より なん{unit} おおいですか？',
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
    unit: '人',
    scene: 'town',
    template: 'ひろばに {num1}人 いました。そのうち {num2}人が かえりました。ひろばに のこっているのは なん人？',
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
    typeLabel: 'とりだす',
    unit: 'まい',
    scene: 'cave',
    template: 'たからばこにカードが {num1}まい 入っていました。{num2}まい 出しました。のこりは なんまい？',
    num1Range: [5, 15],
    num2Range: [1, 9],
    keywords: ['出しました', 'のこり'],
    formulaText: 'はじめの枚数 − 出した枚数',
    reason: '出した枚数を、はじめにあった枚数からひきます。'
  }),

  // 2年生：大きな数・かけ算
  t({
    id: 'g2-add-arrival',
    grade: 2,
    operation: 'add',
    typeLabel: 'ふえる',
    unit: '人',
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
    unit: '円',
    scene: 'town',
    template: 'おさいふに {num1}円 入っています。家の人から {num2}円 もらいました。合わせて何円になりましたか？',
    num1Range: [20, 60],
    num1Step: 10,
    num2Range: [10, 30],
    num2Step: 10,
    keywords: ['家の人から', 'もらいました', '合わせて'],
    formulaText: 'さいふに入っていた金額 ＋ もらった金額',
    reason: 'お金がふえたので、二つの金額を合わせます。'
  }),
  t({
    id: 'g2-add-books',
    grade: 2,
    operation: 'add',
    typeLabel: 'ふえる',
    unit: 'さつ',
    scene: 'town',
    template: '学校の図書室に本が {num1}さつあります。新しく {num2}さつ届きました。本は全部で何さつありますか？',
    num1Range: [10, 50],
    num2Range: [10, 40],
    keywords: ['新しく', '届きました', '全部で'],
    formulaText: 'はじめにあった冊数 ＋ 新しく届いた冊数',
    reason: 'はじめにあった本に、新しく届いた本を合わせます。'
  }),
  t({
    id: 'g2-sub-remaining',
    grade: 2,
    operation: 'sub',
    typeLabel: 'のこり',
    unit: 'まい',
    scene: 'forest',
    template: '森で葉を {num1}まい 集めました。そのうち {num2}まいを かざりに使いました。のこりは 何まいですか？',
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
    unit: '円',
    scene: 'town',
    template: 'おこづかいを {num1}円 持っていました。買い物で {num2}円 使いました。のこりは何円ですか？',
    num1Range: [40, 100],
    num1Step: 10,
    num2Range: [10, 60],
    num2Step: 10,
    keywords: ['使いました', 'のこり'],
    formulaText: 'もっていた金額 − 使った金額',
    reason: '買い物で使った金額を、もとの金額からひきます。'
  }),
  t({
    id: 'g2-sub-compare',
    grade: 2,
    operation: 'sub',
    typeLabel: 'くらべる',
    unit: 'cm',
    scene: 'grassland',
    template: '青いリボンは {num1}cm、赤いリボンは {num2}cmです。青いリボンは赤いリボンより何cm長いですか？',
    num1Range: [30, 90],
    num2Range: [10, 60],
    keywords: ['何cm', '長い'],
    formulaText: '青いリボンの長さ − 赤いリボンの長さ',
    reason: '二つのリボンの長さをくらべて、ちがいを求めます。'
  }),
  t({
    id: 'g2-mul-groups',
    grade: 2,
    operation: 'mul',
    typeLabel: '同じ数ずつ',
    unit: 'まい',
    scene: 'forest',
    template: '1人に {num1}まいずつ シールを配ります。{num2}人います。シールは全部で何まいですか？',
    num1Range: [2, 9],
    num2Range: [2, 9],
    keywords: ['1人に', 'ずつ', '全部で'],
    formulaText: '1人分の枚数 × 人数',
    reason: '1人に配る枚数が人数分あるので、かけ算です。'
  }),
  t({
    id: 'g2-mul-rows',
    grade: 2,
    operation: 'mul',
    typeLabel: 'ならべる',
    unit: '本',
    scene: 'grassland',
    template: '旗を1列に {num1}本ずつ立てます。{num2}列に立てると、旗は全部で何本ですか？',
    num1Range: [2, 9],
    num2Range: [2, 9],
    keywords: ['1列に', 'ずつ', '列'],
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
    template: '毎日、石を {num1}こずつ拾います。{num2}日間では、石を全部で何こ拾いますか？',
    num1Range: [2, 9],
    num2Range: [2, 9],
    keywords: ['毎日', 'ずつ', '日間'],
    formulaText: '1日分の数 × 日数',
    reason: '同じ数を何日分か集めるので、かけ算です。'
  }),

  // 3年生：大きな数・かけ算・わり算
  t({
    id: 'g3-add-large',
    grade: 3,
    operation: 'add',
    typeLabel: 'あわせる',
    unit: '人',
    scene: 'town',
    template: '博物館には午前に {num1}人、午後に {num2}人が見学に来ました。1日で合わせて何人が見学に来ましたか？',
    num1Range: [100, 800],
    num2Range: [100, 600],
    keywords: ['午前に', '午後に', '1日で'],
    formulaText: '午前の人数 ＋ 午後の人数',
    reason: '午前と午後の人数を合わせます。'
  }),
  t({
    id: 'g3-sub-large',
    grade: 3,
    operation: 'sub',
    typeLabel: 'のこり',
    unit: '人',
    scene: 'town',
    template: '博物館に {num1}人が見学に来ました。そのうち {num2}人が帰りました。まだ見学している人は何人ですか？',
    num1Range: [200, 900],
    num2Range: [100, 500],
    keywords: ['そのうち', '帰りました', '何人'],
    formulaText: '見学に来た人数 − 帰った人数',
    reason: '帰った人数を、見学に来た人数からひきます。'
  }),
  t({
    id: 'g3-add-distance',
    grade: 3,
    operation: 'add',
    typeLabel: 'つなぐ',
    unit: 'm',
    scene: 'riverbank',
    template: 'ハイキングで森の道を {num1}m、川のそばの道を {num2}m 歩きました。歩いた道のりは合わせて何mですか？',
    num1Range: [100, 800],
    num2Range: [100, 600],
    keywords: ['ハイキング', '森の道', '川のそば'],
    formulaText: '森の道のり ＋ 川のそばの道のり',
    reason: '二つの道のりをつなげて、全部の道のりを求めます。'
  }),
  t({
    id: 'g3-sub-compare',
    grade: 3,
    operation: 'sub',
    typeLabel: 'くらべる',
    unit: 'm',
    scene: 'sky-island',
    template: '高い山は {num1}m、低い山は {num2}mです。高さのちがいは何mですか？',
    num1Range: [300, 900],
    num2Range: [100, 700],
    keywords: ['高さのちがい'],
    formulaText: '高い山の高さ − 低い山の高さ',
    reason: '二つの山の高さのちがいを求めるので、ひき算です。'
  }),
  t({
    id: 'g3-mul-boxes',
    grade: 3,
    operation: 'mul',
    typeLabel: '同じ数ずつ',
    scene: 'cave',
    template: '1箱に クリスタルが {num1}こずつ 入っています。箱が {num2}箱 あると、クリスタルは ぜんぶで 何こ？',
    num1Range: [3, 9],
    num2Range: [2, 9],
    keywords: ['1箱に', 'ずつ', '箱'],
    formulaText: '1箱分の数 × 箱数',
    reason: '1箱分の同じ数が、箱数分あるので、かけ算です。'
  }),
  t({
    id: 'g3-mul-tickets',
    grade: 3,
    operation: 'mul',
    typeLabel: '同じ値段',
    unit: '円',
    scene: 'town',
    template: '入場券は1枚 {num1}円です。{num2}枚買うと、代金は全部で何円ですか？',
    num1Range: [120, 450],
    num1Step: 10,
    num2Range: [2, 9],
    keywords: ['1枚', '枚買う', '代金'],
    formulaText: '1枚分の値段 × 枚数',
    reason: '同じ値段の入場券を、枚数分買います。'
  }),
  t({
    id: 'g3-mul-rows',
    grade: 3,
    operation: 'mul',
    typeLabel: 'ならべる',
    unit: '本',
    scene: 'forest',
    template: '薬草の苗を1列に {num2}本ずつ、{num1}列に植えます。苗は全部で何本ですか？',
    num1Range: [2, 9],
    num2Range: [3, 9],
    keywords: ['1列に', 'ずつ', '列に'],
    formulaText: '列数 × 1列分の本数',
    reason: '同じ本数の列が、列数分あるので、かけ算です。'
  }),
  t({
    id: 'g3-mul-days',
    grade: 3,
    operation: 'mul',
    typeLabel: '何日分',
    unit: 'ページ',
    scene: 'town',
    template: '毎日本を {num1}ページずつ読みます。{num2}日間では、何ページ読むことになりますか？',
    num1Range: [3, 9],
    num2Range: [2, 9],
    keywords: ['毎日', 'ずつ', '日間'],
    formulaText: '1日分のページ数 × 日数',
    reason: '同じページ数を何日分か読むので、かけ算です。'
  }),
  t({
    id: 'g3-div-sharing',
    grade: 3,
    operation: 'div',
    typeLabel: '同じ数に分ける',
    scene: 'grassland',
    template: '{item}が {num1}{unit} あります。{num2}人で同じ数ずつ分けると、1人分は何{unit}ですか？',
    items: ['ビー玉', '小さな石', 'クリスタル'],
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
    items: ['みかん', 'ビー玉', '小さな石'],
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
    template: '長さ {num1}cm のひもがあります。{num2}cmずつに切ると、何本のひもができますか？',
    num2Range: [2, 9],
    answerRange: [2, 9],
    unit: '本',
    keywords: ['ずつ', '何本のひも'],
    formulaText: '全部の長さ ÷ 1本分の長さ',
    reason: '全部の長さの中に、1本分の長さがいくつ分あるかを求めます。'
  }),
  t({
    id: 'g3-div-books',
    grade: 3,
    operation: 'div',
    typeLabel: '同じ数に分ける',
    scene: 'town',
    template: '本が {num1}さつ あります。{num2}人に同じ数ずつ配ると、1人に何さつずつ配れますか？',
    num2Range: [2, 9],
    answerRange: [2, 9],
    unit: 'さつ',
    keywords: ['同じ数ずつ', '1人に'],
    formulaText: '全部の冊数 ÷ 人数',
    reason: '本の全部の数を、人数で同じ数ずつ分けます。'
  }),

  // 生活の場面を広げる追加問題
  // 1年生：学校や身近な生活の数
  t({
    id: 'g1-add-library',
    grade: 1,
    operation: 'add',
    typeLabel: 'あわせる',
    scene: 'town',
    template: '本のコーナーに、えほんが {num1}さつ、ずかんが {num2}さつ あります。本は あわせて なんさつ ありますか？',
    unit: 'さつ',
    num1Range: [1, 9],
    num2Range: [1, 9],
    keywords: ['あわせて', 'なんさつ'],
    formulaText: 'えほんの数 ＋ ずかんの数',
    reason: 'えほんとずかんの数を合わせて、本の全部の数を求めます。'
  }),
  t({
    id: 'g1-add-playground',
    grade: 1,
    operation: 'add',
    typeLabel: 'ふえる',
    scene: 'grassland',
    template: 'こうていで 子どもが {num1}人 あそんでいます。あとから {num2}人 きました。いまは なん人？',
    unit: '人',
    num1Range: [1, 9],
    num2Range: [1, 9],
    keywords: ['あとから', 'きました', 'いまは'],
    formulaText: 'はじめにいた人数 ＋ 来た人数',
    reason: 'あとから来た人数を、はじめにいた人数に合わせます。'
  }),
  t({
    id: 'g1-sub-pencil',
    grade: 1,
    operation: 'sub',
    typeLabel: 'なくす',
    scene: 'town',
    template: 'えんぴつを {num1}本 もっていました。{num2}本 なくしました。のこりは なん本？',
    unit: '本',
    num1Range: [5, 15],
    num2Range: [1, 9],
    keywords: ['なくしました', 'のこり'],
    formulaText: '持っていた本数 − なくした本数',
    reason: 'なくした本数を、持っていた本数からひきます。'
  }),
  t({
    id: 'g1-sub-stickers',
    grade: 1,
    operation: 'sub',
    typeLabel: 'くらべる',
    scene: 'forest',
    template: 'ゆうさんは シールを {num1}まい、はるさんは {num2}まい もっています。ゆうさんのほうが なんまい おおいですか？',
    unit: 'まい',
    num1Range: [5, 15],
    num2Range: [1, 9],
    keywords: ['なんまい', 'おおい'],
    formulaText: 'ゆうさんの枚数 − はるさんの枚数',
    reason: '二人の枚数をくらべて、ちがいを求めます。'
  }),

  // 2年生：九九や2けたの数を生活場面で使う
  t({
    id: 'g2-add-event',
    grade: 2,
    operation: 'add',
    typeLabel: 'あわせる',
    scene: 'town',
    template: '学校のおまつりには、午前に {num1}人、午後に {num2}人 来ました。1日で 合わせて 何人 来ましたか？',
    unit: '人',
    num1Range: [20, 50],
    num2Range: [10, 40],
    keywords: ['午前', '午後', '合わせて'],
    formulaText: '午前の人数 ＋ 午後の人数',
    reason: '午前と午後の人数を合わせて、来た人の合計を求めます。'
  }),
  t({
    id: 'g2-sub-library',
    grade: 2,
    operation: 'sub',
    typeLabel: 'のこり',
    scene: 'town',
    template: '図書室に本が {num1}さつ あります。そのうち {num2}さつを 貸し出しました。図書室に のこっている本は 何さつですか？',
    unit: 'さつ',
    num1Range: [40, 100],
    num2Range: [10, 40],
    keywords: ['貸し出しました', 'のこっている'],
    formulaText: 'はじめにあった本の数 − 貸し出した本の数',
    reason: '貸し出した本の数を、はじめにあった本の数からひきます。'
  }),
  t({
    id: 'g2-mul-snacks',
    grade: 2,
    operation: 'mul',
    typeLabel: '同じ数ずつ',
    scene: 'town',
    template: 'おやつを 1人に {num1}こずつ 配ります。{num2}人に 配るには、全部で 何こ いりますか？',
    unit: 'こ',
    num1Range: [2, 9],
    num2Range: [2, 9],
    keywords: ['1人に', 'ずつ', '全部で'],
    formulaText: '1人分の数 × 人数',
    reason: '同じ数ずつ配るまとまりが人数分あるので、かけ算です。'
  }),
  t({
    id: 'g2-mul-desks',
    grade: 2,
    operation: 'mul',
    typeLabel: '同じ数ずつ',
    scene: 'town',
    template: 'つくえを 1列に {num1}台ずつ、{num2}列に ならべます。つくえは 全部で 何台ですか？',
    unit: '台',
    num1Range: [2, 9],
    num2Range: [2, 9],
    keywords: ['ずつ', '列', '全部で'],
    formulaText: '1列の台数 × 列数',
    reason: 'どの列にも同じ台数をならべるので、かけ算で求められます。'
  }),

  // 3年生：九九を使う場面と、わり算の意味を広げる
  t({
    id: 'g3-add-festival',
    grade: 3,
    operation: 'add',
    typeLabel: 'あわせる',
    scene: 'town',
    template: '地域のおまつりには、土曜日に {num1}人、日曜日に {num2}人 来ました。2日間で 合わせて 何人 来ましたか？',
    unit: '人',
    num1Range: [120, 800],
    num2Range: [100, 600],
    keywords: ['土曜日', '日曜日', '2日間'],
    formulaText: '土曜日の人数 ＋ 日曜日の人数',
    reason: '2日間の人数を合わせて、合計を求めます。'
  }),
  t({
    id: 'g3-sub-budget',
    grade: 3,
    operation: 'sub',
    typeLabel: 'つかった金額',
    scene: 'town',
    template: 'おこづかいを {num1}円 持っています。{num2}円のノートを買いました。残りは何円ですか？',
    unit: '円',
    num1Range: [300, 900],
    num1Step: 10,
    num2Range: [100, 500],
    num2Step: 10,
    keywords: ['買いました', '残り'],
    formulaText: 'おこづかいの金額 − ノートの代金',
    reason: '買い物に使った金額を、もとの金額からひきます。'
  }),
  t({
    id: 'g3-mul-entry',
    grade: 3,
    operation: 'mul',
    typeLabel: 'バスに乗る人数',
    scene: 'town',
    template: '遠足で、バス1台に {num1}人ずつ乗ります。バスが {num2}台あると、全部で何人乗れますか？',
    unit: '人',
    num1Range: [20, 45],
    num2Range: [2, 9],
    keywords: ['バス1台に', 'ずつ', '全部で'],
    formulaText: '1台に乗る人数 × バスの台数',
    reason: 'どのバスにも同じ人数が乗るので、1台分の人数を台数分かけます。'
  }),
  t({
    id: 'g3-div-pencils',
    grade: 3,
    operation: 'div',
    typeLabel: '同じ数に分ける',
    scene: 'town',
    template: 'えんぴつが {num1}本 あります。{num2}人に 同じ数ずつ 配ると、1人に 何本ずつ 配れますか？',
    unit: '本',
    num2Range: [2, 9],
    answerRange: [2, 9],
    keywords: ['同じ数ずつ', '1人に'],
    formulaText: 'えんぴつの全部の本数 ÷ 人数',
    reason: '全部の本数を人数で同じ数ずつ分けるので、わり算です。'
  }),
  t({
    id: 'g3-div-packs',
    grade: 3,
    operation: 'div',
    typeLabel: 'いくつ分',
    scene: 'grassland',
    template: 'クッキーが {num1}こ あります。1ふくろに {num2}こずつ 入れると、何ふくろできますか？',
    unit: 'こ',
    num2Range: [2, 9],
    answerRange: [2, 9],
    keywords: ['1ふくろに', 'ずつ', '何ふくろ'],
    formulaText: 'クッキーの全部の数 ÷ 1ふくろ分の数',
    reason: '全部のクッキーを1ふくろ分ずつ分けて、ふくろの数を求めます。'
  }),

  // 1年生：数を合わせる・へらす場面を広げる
  t({
    id: 'g1-add-drawer',
    grade: 1,
    operation: 'add',
    typeLabel: 'あわせる',
    scene: 'town',
    unit: 'まい',
    template: 'ひきだしに 色紙が {num1}まい あります。あと {num2}まい 入れました。色紙は ぜんぶで 何まい ありますか？',
    num1Range: [1, 9],
    num2Range: [1, 9],
    keywords: ['あと', '入れました', 'ぜんぶで'],
    formulaText: 'はじめにあった色紙 ＋ あとから入れた色紙',
    reason: 'はじめにあった数に、あとから入れた数を合わせます。'
  }),
  t({
    id: 'g1-add-garden',
    grade: 1,
    operation: 'add',
    typeLabel: 'あわせる',
    scene: 'grassland',
    unit: '本',
    template: '花だんに 赤い花が {num1}本、黄色い花が {num2}本 さいています。花は あわせて 何本ですか？',
    num1Range: [1, 9],
    num2Range: [1, 9],
    keywords: ['赤い花', '黄色い花', 'あわせて'],
    formulaText: '赤い花の本数 ＋ 黄色い花の本数',
    reason: '赤い花と黄色い花を合わせて、花の全部の数を求めます。'
  }),
  t({
    id: 'g1-add-stickers',
    grade: 1,
    operation: 'add',
    typeLabel: 'ふえる',
    scene: 'forest',
    unit: 'まい',
    template: 'カードに 星のシールを {num1}まい はりました。さらに {num2}まい はると、シールは ぜんぶで 何まいですか？',
    num1Range: [1, 9],
    num2Range: [1, 9],
    keywords: ['さらに', 'はると', 'ぜんぶで'],
    formulaText: '先にはったシール ＋ あとからはるシール',
    reason: 'シールをあとからはるので、数がふえます。'
  }),
  t({
    id: 'g1-add-pencils',
    grade: 1,
    operation: 'add',
    typeLabel: 'ふえる',
    scene: 'town',
    unit: '本',
    template: 'えんぴつを {num1}本 もっています。新しく {num2}本 もらいました。えんぴつは ぜんぶで 何本ですか？',
    num1Range: [1, 9],
    num2Range: [1, 9],
    keywords: ['新しく', 'もらいました', 'ぜんぶで'],
    formulaText: 'もっていた本数 ＋ もらった本数',
    reason: 'もっていたえんぴつに、もらったえんぴつを合わせます。'
  }),
  t({
    id: 'g1-add-balloons',
    grade: 1,
    operation: 'add',
    typeLabel: 'あわせる',
    scene: 'town',
    unit: 'こ',
    template: 'おたんじょう会に、赤いふうせんが {num1}こ、青いふうせんが {num2}こ あります。ふうせんは あわせて 何こですか？',
    num1Range: [1, 9],
    num2Range: [1, 9],
    keywords: ['赤いふうせん', '青いふうせん', 'あわせて'],
    formulaText: '赤いふうせんの数 ＋ 青いふうせんの数',
    reason: '赤と青のふうせんを合わせた数を求めます。'
  }),
  t({
    id: 'g1-sub-apples',
    grade: 1,
    operation: 'sub',
    typeLabel: 'のこり',
    scene: 'forest',
    unit: 'こ',
    template: 'りんごが {num1}こ あります。{num2}こ 食べました。のこりは 何こですか？',
    num1Range: [10, 19],
    num2Range: [1, 9],
    keywords: ['食べました', 'のこり'],
    formulaText: 'はじめの数 − 食べた数',
    reason: 'はじめにあったりんごから、食べたりんごの数をひきます。'
  }),
  t({
    id: 'g1-sub-paper',
    grade: 1,
    operation: 'sub',
    typeLabel: 'つかう',
    scene: 'town',
    unit: 'まい',
    template: '色紙を {num1}まい もっています。工作に {num2}まい 使いました。のこりは 何まいですか？',
    num1Range: [10, 19],
    num2Range: [1, 9],
    keywords: ['工作', '使いました', 'のこり'],
    formulaText: 'もっていた色紙 − 使った色紙',
    reason: '使った色紙の数を、もっていた数からひきます。'
  }),
  t({
    id: 'g1-sub-beads',
    grade: 1,
    operation: 'sub',
    typeLabel: 'つかう',
    scene: 'cave',
    unit: 'こ',
    template: 'ビーズが {num1}こ あります。ブレスレットを作るために {num2}こ 使いました。のこりは 何こですか？',
    num1Range: [10, 19],
    num2Range: [1, 9],
    keywords: ['ブレスレット', '使いました', 'のこり'],
    formulaText: 'はじめのビーズ − 使ったビーズ',
    reason: '使ったビーズの数を、はじめの数からひきます。'
  }),
  t({
    id: 'g1-sub-tickets',
    grade: 1,
    operation: 'sub',
    typeLabel: 'のこり',
    scene: 'town',
    unit: 'まい',
    template: '入場券を {num1}まい もっています。{num2}まい 使うと、のこりは 何まいですか？',
    num1Range: [10, 19],
    num2Range: [1, 9],
    keywords: ['入場券', '使うと', 'のこり'],
    formulaText: 'もっていた入場券 − 使った入場券',
    reason: '使った入場券の数を、もっていた数からひきます。'
  }),
  t({
    id: 'g1-sub-balls',
    grade: 1,
    operation: 'sub',
    typeLabel: 'くらべる',
    scene: 'grassland',
    unit: 'こ',
    template: '赤いボールは {num1}こ、青いボールは {num2}こ あります。赤いボールは 青いボールより 何こ 多いですか？',
    num1Range: [10, 19],
    num2Range: [1, 9],
    keywords: ['赤いボール', '青いボール', '何こ 多い'],
    formulaText: '赤いボールの数 − 青いボールの数',
    reason: '二つの数をくらべて、ちがいを求めます。'
  }),
  t({
    id: 'g1-sub-blocks',
    grade: 1,
    operation: 'sub',
    typeLabel: 'かたづける',
    scene: 'cave',
    unit: 'こ',
    template: 'つみ木が {num1}こ あります。{num2}こを 箱にしまいました。外にのこっているつみ木は 何こですか？',
    num1Range: [10, 19],
    num2Range: [1, 9],
    keywords: ['箱に', 'しまいました', 'のこっている'],
    formulaText: 'はじめのつみ木 − 箱にしまったつみ木',
    reason: '箱にしまった数を、はじめにあった数からひきます。'
  }),

  // 2年生：2けたの数と九九を生活の場面で使う
  t({
    id: 'g2-add-caps',
    grade: 2,
    operation: 'add',
    typeLabel: 'あわせる',
    scene: 'forest',
    unit: 'こ',
    template: 'ペットボトルのキャップを {num1}こ 集めました。次の日に {num2}こ 集めました。2日間で何こ集めましたか？',
    num1Range: [20, 60],
    num2Range: [10, 30],
    keywords: ['次の日', '集めました', '2日間'],
    formulaText: '1日目の数 ＋ 2日目の数',
    reason: '2日間に集めたキャップの数を合わせます。'
  }),
  t({
    id: 'g2-add-tape',
    grade: 2,
    operation: 'add',
    typeLabel: 'つなぐ',
    scene: 'cave',
    unit: 'cm',
    template: 'テープが {num1}cm あります。さらに {num2}cm つなげると、テープの長さは全部で何cmですか？',
    num1Range: [20, 60],
    num2Range: [10, 30],
    keywords: ['さらに', 'つなげる', '全部で'],
    formulaText: 'はじめの長さ ＋ つなげた長さ',
    reason: 'テープをつなげたので、二つの長さを合わせます。'
  }),
  t({
    id: 'g2-add-balls',
    grade: 2,
    operation: 'add',
    typeLabel: 'あわせる',
    scene: 'grassland',
    unit: 'こ',
    template: 'かごに赤いボールが {num1}こ、青いボールが {num2}こ 入っています。ボールは全部で何こですか？',
    num1Range: [20, 60],
    num2Range: [10, 30],
    keywords: ['赤いボール', '青いボール', '全部で'],
    formulaText: '赤いボールの数 ＋ 青いボールの数',
    reason: '赤いボールと青いボールを合わせた数を求めます。'
  }),
  t({
    id: 'g2-sub-caps',
    grade: 2,
    operation: 'sub',
    typeLabel: 'つかう',
    scene: 'town',
    unit: 'こ',
    template: 'キャップを {num1}こ 集めました。そのうち {num2}こを 工作に使いました。のこりは何こですか？',
    num1Range: [50, 90],
    num2Range: [10, 40],
    keywords: ['集めました', '工作に使いました', 'のこり'],
    formulaText: '集めた数 − 工作に使った数',
    reason: '工作に使った数を、集めた数からひきます。'
  }),
  t({
    id: 'g2-sub-rope',
    grade: 2,
    operation: 'sub',
    typeLabel: 'のこり',
    scene: 'forest',
    unit: 'm',
    template: 'ロープが {num1}m あります。{num2}m 使いました。のこりの長さは何mですか？',
    num1Range: [50, 90],
    num2Range: [10, 40],
    keywords: ['使いました', 'のこりの長さ'],
    formulaText: 'はじめの長さ − 使った長さ',
    reason: '使った長さを、はじめの長さからひきます。'
  }),
  t({
    id: 'g2-sub-score',
    grade: 2,
    operation: 'sub',
    typeLabel: 'くらべる',
    scene: 'town',
    unit: '点',
    template: '赤チームは {num1}点、青チームは {num2}点でした。赤チームは青チームより何点多いですか？',
    num1Range: [50, 90],
    num2Range: [10, 40],
    keywords: ['赤チーム', '青チーム', '何点多い'],
    formulaText: '赤チームの点数 − 青チームの点数',
    reason: '二つのチームの点数をくらべて、ちがいを求めます。'
  }),
  t({
    id: 'g2-mul-cookies',
    grade: 2,
    operation: 'mul',
    typeLabel: '同じ数ずつ',
    scene: 'town',
    unit: 'こ',
    template: '1皿にクッキーを {num1}こずつ のせます。{num2}皿では、クッキーは全部で何こいりますか？',
    num1Range: [2, 9],
    num2Range: [2, 9],
    keywords: ['1皿に', 'ずつ', '全部で'],
    formulaText: '1皿分の数 × 皿の数',
    reason: '同じ数のクッキーを、皿の数だけ用意します。'
  }),
  t({
    id: 'g2-mul-teams',
    grade: 2,
    operation: 'mul',
    typeLabel: '同じ人数ずつ',
    scene: 'grassland',
    unit: '人',
    template: '1チームに {num1}人ずつ います。{num2}チームでは、全部で何人ですか？',
    num1Range: [2, 9],
    num2Range: [2, 9],
    keywords: ['1チームに', 'ずつ', '全部で'],
    formulaText: '1チームの人数 × チームの数',
    reason: 'どのチームにも同じ人数がいるので、かけ算で求めます。'
  }),
  t({
    id: 'g2-mul-worksheets',
    grade: 2,
    operation: 'mul',
    typeLabel: '同じ数ずつ',
    scene: 'town',
    unit: '問',
    template: 'ドリルは1ページに {num1}問 あります。{num2}ページ分では、全部で何問ありますか？',
    num1Range: [2, 9],
    num2Range: [2, 9],
    keywords: ['1ページに', '何問', '全部で'],
    formulaText: '1ページの問題数 × ページ数',
    reason: '同じ問題数のページが何ページ分かあるので、かけ算です。'
  }),
  t({
    id: 'g2-mul-weekly',
    grade: 2,
    operation: 'mul',
    typeLabel: '何週間分',
    scene: 'town',
    unit: '回',
    template: '1週間に {num1}回 練習します。{num2}週間では、全部で何回練習しますか？',
    num1Range: [2, 9],
    num2Range: [2, 9],
    keywords: ['1週間に', '週間では', '何回'],
    formulaText: '1週間の回数 × 週の数',
    reason: '同じ回数の練習を、何週間分か行います。'
  }),
  t({
    id: 'g2-mul-packets',
    grade: 2,
    operation: 'mul',
    typeLabel: 'ふくろに入れる',
    scene: 'cave',
    unit: 'まい',
    template: '1ふくろにカードを {num1}まいずつ 入れます。{num2}ふくろでは、カードは全部で何まいですか？',
    num1Range: [2, 9],
    num2Range: [2, 9],
    keywords: ['1ふくろに', 'ずつ', '全部で'],
    formulaText: '1ふくろの枚数 × ふくろの数',
    reason: '同じ枚数のふくろがいくつ分あるかを考えます。'
  }),

  // 3年生：3けたの数・かけ算・わり算の場面を広げる
  t({
    id: 'g3-add-caps',
    grade: 3,
    operation: 'add',
    typeLabel: 'あわせる',
    scene: 'town',
    unit: 'こ',
    template: '地域の回収活動で、月曜日に {num1}こ、火曜日に {num2}こ キャップを集めました。2日間で何こ集めましたか？',
    num1Range: [200, 800],
    num2Range: [100, 600],
    keywords: ['月曜日', '火曜日', '2日間'],
    formulaText: '月曜日の数 ＋ 火曜日の数',
    reason: '2日間に集めたキャップの数を合わせます。'
  }),
  t({
    id: 'g3-add-books',
    grade: 3,
    operation: 'add',
    typeLabel: 'あわせる',
    scene: 'town',
    unit: 'さつ',
    template: '本を集める活動で、1組から {num1}さつ、2組から {num2}さつ 集まりました。本は全部で何さつですか？',
    num1Range: [200, 800],
    num2Range: [100, 600],
    keywords: ['1組から', '2組から', '全部で'],
    formulaText: '1組から集まった冊数 ＋ 2組から集まった冊数',
    reason: '二つの組から集まった本の数を合わせます。'
  }),
  t({
    id: 'g3-sub-road',
    grade: 3,
    operation: 'sub',
    typeLabel: 'のこり',
    scene: 'riverbank',
    unit: 'm',
    template: 'ハイキングコースは {num1}m あります。{num2}m 歩きました。のこりの道のりは何mですか？',
    num1Range: [500, 900],
    num2Range: [100, 400],
    keywords: ['ハイキングコース', '歩きました', 'のこりの道のり'],
    formulaText: 'コースの長さ − 歩いた道のり',
    reason: '歩いた道のりを、コース全体の長さからひきます。'
  }),
  t({
    id: 'g3-sub-tickets',
    grade: 3,
    operation: 'sub',
    typeLabel: 'のこり',
    scene: 'town',
    unit: 'まい',
    template: 'お祭りの入場券を {num1}まい 用意しました。{num2}まいを配りました。のこりは何まいですか？',
    num1Range: [500, 900],
    num2Range: [100, 400],
    keywords: ['入場券', '配りました', 'のこり'],
    formulaText: '用意した入場券 − 配った入場券',
    reason: '配った枚数を、用意した枚数からひきます。'
  }),
  t({
    id: 'g3-mul-laps',
    grade: 3,
    operation: 'mul',
    typeLabel: '何周分',
    scene: 'grassland',
    unit: 'm',
    template: 'ランニングコースは1周 {num1}m です。{num2}周すると、何m 走ることになりますか？',
    num1Range: [120, 900],
    num2Range: [2, 9],
    keywords: ['1周', '周すると', '何m'],
    formulaText: '1周の長さ × 周の数',
    reason: '1周の長さが周の数分あるので、かけ算で求めます。'
  }),
  t({
    id: 'g3-div-teams',
    grade: 3,
    operation: 'div',
    typeLabel: 'いくつ分',
    scene: 'grassland',
    unit: '人',
    template: '子どもが {num1}人 います。{num2}人ずつのチームに分かれると、何チームできますか？',
    num2Range: [2, 9],
    answerRange: [2, 9],
    keywords: ['人ずつ', 'チームに分かれる', '何チーム'],
    formulaText: '子どもの人数 ÷ 1チームの人数',
    reason: '全員を同じ人数ずつのチームに分けて、チームの数を求めます。'
  }),
  t({
    id: 'g3-div-vases',
    grade: 3,
    operation: 'div',
    typeLabel: 'いくつ分',
    scene: 'grassland',
    unit: '本',
    template: '花が {num1}本 あります。花びん1つに {num2}本ずつ 入れると、花びんは何こ必要ですか？',
    num2Range: [2, 9],
    answerRange: [2, 9],
    keywords: ['花びん1つに', '本ずつ', '何こ'],
    formulaText: '花の本数 ÷ 花びん1つに入れる本数',
    reason: '花を同じ本数ずつ花びんに入れて、花びんの数を求めます。'
  }),
  t({
    id: 'g3-div-planters',
    grade: 3,
    operation: 'div',
    typeLabel: '同じ数に分ける',
    scene: 'grassland',
    unit: '本',
    template: '花の苗が {num1}本 あります。{num2}つの花だんに同じ数ずつ植えると、1つの花だんに何本ずつ植えられますか？',
    num2Range: [2, 9],
    answerRange: [2, 9],
    keywords: ['花の苗', '同じ数ずつ', '1つの花だん'],
    formulaText: '苗の本数 ÷ 花だんの数',
    reason: '苗を花だんの数だけ、同じ本数ずつ分けます。'
  })

];

let questionSerial = 0;

const randomInt = (range, step = 1) => {
  const min = Number(range[0]);
  const max = Number(range[1]);
  const interval = Math.max(1, Number(step) || 1);
  const count = Math.floor((max - min) / interval) + 1;
  return min + Math.floor(Math.random() * count) * interval;
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
    num2 = randomInt(template.num2Range, template.num2Step || 1);
    answer = randomInt(template.answerRange || [2, 9], template.answerStep || 1);
    num1 = num2 * answer;
  } else {
    num1 = randomInt(template.num1Range, template.num1Step || 1);
    num2 = randomInt(template.num2Range, template.num2Step || 1);
    if (template.operation === 'sub') {
      let guard = 0;
      while (num1 <= num2 && guard < 50) {
        num1 = randomInt(template.num1Range, template.num1Step || 1);
        num2 = randomInt(template.num2Range, template.num2Step || 1);
        guard += 1;
      }
      if (num1 <= num2) {
        // 予備処理でも、10円単位などの刻み幅を守って引き算が成立する組を作る。
        const min1 = Number(template.num1Range[0]);
        const max1 = Number(template.num1Range[1]);
        const step1 = Math.max(1, Number(template.num1Step) || 1);
        const min2 = Number(template.num2Range[0]);
        const max2 = Number(template.num2Range[1]);
        const step2 = Math.max(1, Number(template.num2Step) || 1);
        const nextNum1 = min1 + Math.ceil((num2 + 1 - min1) / step1) * step1;

        if (nextNum1 <= max1) {
          num1 = nextNum1;
        } else {
          num1 = min1 + Math.floor((max1 - min1) / step1) * step1;
          const maxValidNum2 = Math.min(max2, num1 - 1);
          num2 = min2 + Math.floor((maxValidNum2 - min2) / step2) * step2;
        }
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
