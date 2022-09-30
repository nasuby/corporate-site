# mops-website

## 環境構築

すでにあると想定するもの
```
- node
- npm
- yarn
```

- ローカル環境構築のため以下をインストールすること
  - https://localwp.com/?_ga=2.58678636.791698980.1664545654-472992394.1664545653&_gac=1.249114101.1664545654.CjwKCAjwp9qZBhBkEiwAsYFsb3JJAUkC7N3lFDQxf4AGlB_H8L-uFY5nteiW8CwqZ8RToQ6e-LhQARoCh_0QAvD_BwE
  - wordpressの環境を作成するに当たり、[こちら](https://www.onamae.com/column/wordpress/27/)を参照して進めていく
  - wordpressの初期画面が表示できたら以下1から進めてください。

1. localアプリのthemes配下に、このリポジトリを配置(`themes/mops-website`)
2. このディレクトリ直下で`yarn`を実施
3. `node-modules`が作成できたら成功
4. `yarn run dev`とコマンドを打つと、ローカルに立ち上がります。
5. wordpressの管理画面でthemesの切り替えを行ってください。
6. コーポレートサイトが表示されます。