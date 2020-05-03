# next-js-sequelize-mysql

[sequelize](https://sequelize.org) を使ってみた。……が、正直使いづらいと感じる。  
公式ドキュメントも TypeScript 向けの説明は不足していてあまり親切とは言えないし。

どんな手順でおこなったかは以下のブログにメモレベルだがまとめた。  
[https://nekonenene.hatenablog.com/entry/2020/05/03/102837](https://nekonenene.hatenablog.com/entry/2020/05/03/102837)

うーん、Node.js では ORM 使わなくていいんじゃないかな。

→ というわけで sequelize 使わないパターンも作ってみた: [https://github.com/nekonenene/next-js-mysql](https://github.com/nekonenene/next-js-mysql)


## Required

* MySQL


## Dev

1. Clone this repository
2. `npm i`
3. Create database and update `config/config.json` if you need
4. `npm run dev`
