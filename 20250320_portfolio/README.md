

## 環境準備
```zsh
// パッケージをインストール
npm install
```

## 使用方法
```zsh
gulp
```

### 注意事項
browserSync で2件セキュリティの脆弱性が指摘されている。解消できてない状況。<br>
使わなないで確認する場合、VSCodeのlive Serverを入れる<br>

### 補足事項
gulpを実行するとsrcのソースコードがdistに出力されます。<br>
- src　# 開発用のソースコード
- dist　# ビルド後の出力（本番環境用）
