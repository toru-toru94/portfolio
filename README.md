# Portfolio Site

このリポジトリはポートフォリオサイトの開発および GitHub Pages 公開用です。

## ディレクトリ構造

```
├── src/ # ポータルサイトのソース
├── dist/ # ビルド成果物 (自動デプロイ対象)
├── shops/ # サブサイト用 (src, distを持つ)
├── gulpfile.js # ビルドスクリプト
├── package.json # 依存関係
└── .github/ # GitHub Actions (デプロイ設定)
```


## デプロイ方法

- `master` ブランチで `src` を編集
- `gulp build` を実行して `dist/` を生成
- 変更をコミット＆pushすると、GitHub Actions が自動でビルド＆`gh-pages` ブランチにデプロイ
- 公開URL: [https://toru-toru94.github.io/portfolio/](https://toru-toru94.github.io/portfolio/)

## サブサイトの追加

- `shops/` ディレクトリを作成して `src`, `dist` を配置
- 今後、`gulp build --site shops` をサポート予定
- 自動デプロイのワークフローで `/shops/` として公開予定

## 注意点

- `dist/` と `shops/dist/` は `.gitignore` で管理から除外
- デプロイ用の `gh-pages` ブランチは **Actions が自動管理**しているため、手動で編集しないこと
