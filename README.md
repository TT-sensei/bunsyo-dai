# ことばの森・立式の旅

小学生が文章題を読み、数量の関係を見つけ、自分で式をたてるためのWeb教材です。

[公開ページ](https://tt-sensei.github.io/bunsyo-dai/)

## この教材のねらい

文章題を解くときに、答えを急いで求めるのではなく、

1. 文章を読む
2. 数の関係をつかむ
3. 式をたてる
4. 式を計算して答えを出す

という流れを何度も経験します。

## 今回の構成

これまでの「敵を倒す」タイプのファンタジー教材とは構成を変え、文章題を解くたびに「式の道」が開く、立式中心の旅にしています。

- 1回10問
- 1問を「式をたてる」→「答えを出す」の二段階に分離
- 1〜3年生を学年別に選択
- おすすめの旅、たし算、ひき算、かけ算、わり算から選択
- 間違えた問題は「まちがいノート」で再挑戦
- ヒントと答えを見る道を用意
- 式をたてた後は、計算が苦手な子向けにNAVIへ「答えをお願い」できる
- 答えサポートを使った場合も立式は記録するが、経験値は通常より少なくする
- 学習した問題数、レベル、立式のかけらを保存

## 問題データ

data.js に教材固有の問題テンプレートを置いています。現在は32種類です。

| 学年 | 主な学習内容 | テンプレート数 |
| --- | --- | ---: |
| 1年生 | あわせる、ふえる、のこり、わたす、くらべる | 10 |
| 2年生 | 大きな数、たし算、ひき算、同じ数ずつのかけ算 | 10 |
| 3年生 | 大きな数、かけ算、同じ数に分ける、いくつ分のわり算 | 12 |

同じテンプレートでも数値や場面が変わるため、繰り返し立式できます。ひき算は引かれる数が引く数より大きくなり、わり算は割り切れる数になるよう生成しています。

## edu-kitとの関係

edu-kitの設計原則に合わせ、学習内容・問題文・式・入力を画面の主役にしています。

- edu-components の QuestionPool、AnswerChecker、StorageManager を使用
- edu:correct、edu:wrong、edu:levelchange などのイベントを教材側で画面へ接続
- edu-effects の学習用CSSを読み込み、正誤や達成を控えめに表現
- GitHub Pagesで動くHTML / CSS / Vanilla JavaScript構成
- npm、ビルド、APIキー、外部DBは使用しない
- タブレット横向きでは、問題文と式・答えの入力を同時に確認できる構成
- prefers-reduced-motion では動きを抑える

## NAVI Fantasy

navi-character- の実在する軽量WebPを使用しています。

- 入口：assets/web/fantasy/groups/group-fantasy-adventure.webp
- 学習案内：assets/web/fantasy/groups/group-fantasy-training.webp
- 達成：assets/web/fantasy/groups/group-fantasy-celebration.webp
- 問題中の案内：assets/web/fantasy/sora-swordsman.webp
- 考え方の手がかり：assets/web/fantasy/kai-mage.webp
- 再挑戦：assets/web/fantasy/nami-guardian-knight.webp
- 正解・達成：assets/web/fantasy/saku-cleric-healer.webp

NAVIは、問題文や入力欄を置き換えない補助役です。キャラクター名を常時表示せず、短いHTMLテキストと一緒に使います。画像が読み込めない場合も、問題と入力は継続して使えます。

## ファイル構成

- index.html：学年・式の道を選ぶ入口
- index.js：入口画面、学習記録、モード選択
- quest.html：立式の旅の画面
- quest.js：出題、立式判定、答え判定、ヒント、結果
- data.js：文章題テンプレートと問題生成
- common.js：edu-kit接続、保存、互換移行、NAVI・音の設定
- styles.css：入口・問題・結果の共通レイアウト

## 保存

新しい保存領域は edu:bunsyo-dai: namespaceです。

旧版の saved_solved_count、saved_level、saved_exp、saved_mistakes がある場合は初回起動時に読み継ぎます。旧キーにも記録を残すため、既存の保存データを持つ環境でも続きから学習できます。

## 操作

- 数字欄：キーボード、タブレットの数字入力に対応
- 演算記号：＋、−、×、÷をタップ
- この式でいい？：立式を判定
- 答えを確認：たてた式の答えを判定
- ことばに注目：問題文の手がかりを開く
- 答えをお願い：式をたてた後、NAVIに答えだけを出してもらう。立式は記録し、経験値は少なめ

## 保護する学習内容

画面構成や演出を変更しても、次の内容を優先します。

- 問題文と数量関係
- 立式の判定
- 答えの判定
- まちがいノート
- リロード後の学習記録
- 画像がなくても学習できること
