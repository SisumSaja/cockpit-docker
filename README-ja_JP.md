# コマンダープロジェクト

[英語](README.md)｜日本語

## プロジェクトの説明
Cockpit](https://cockpit-project.org/)ナビゲーションにカスタムページを作成し、Dockerのインストール、イメージ管理、コンテナ管理を管理する。
## 開発に必要なもの

Debian/Ubuntuの場合：

    sudo apt install gettext nodejs npm make

Fedoraの場合：

    sudo dnf install gettext nodejs npm make


## ソースの取得とビルド

これらのコマンドはソースをチェックアウトして `dist/` ディレクトリにビルドする：
1. GitHubからクローン
```
git clone git@github.com:anclinc/commander.git
```

2. ディレクトリをロカルに移動
```
cd commander
```

3. Makefile でビルド
```
make
```

## インストール

```
make install
``` 
コンパイルして `/usr/local/share/cockpit/` にインストールする。また
便利なターゲットである `srpm` と `rpm` は、それぞれソースとバイナリの rpm をビルドする、
をビルドする。これらはどちらも `dist` ターゲットを使用する。
ターゲットを使用する。production` モードでは、ソースファイルは自動的に minify され、圧縮される。
は自動的に最小化され圧縮される。NODE_ENV=production` を設定してください。
を設定してください。

開発環境では、通常モジュールを git
ツリーから直接モジュールを実行したいでしょう。そのためには
```
make devel-install
``` 
を実行してたら自動的にリンクされます。手動で行う場合は

手動で行う場合は

```
mkdir -p ~/.local/share/cockpit
ln -s `pwd`/dist ~/.local/share/cockpit/commander
```

ソースコードを変更したらまた`make`を起動
ページを更新したら変更でてきます

[watch mode](https://esbuild.github.io/api/#watch)で実行したら自動的にへんこうします
```
./build.js -w
```
または
```
make watch
```

仮想マシンに対して開発する場合、監視モードでは自動的にアップロードすることもできます
コードは、「RSYNC」環境変数を次のように設定することで変更されます。
リモートのホスト名。

```
RSYNC=c make watch
```

通常のユーザーとしてリモート ホストに対して開発する場合、`RSYNC_DEVEL` は
コード変更を `~/.local/share/cockpit/` にアップロードするように設定します
`/usr/local`。

```
RSYNC_DEVEL=example.com make watch
```

ローカルにインストールされたバージョンを「アンインストール」するには、「make devel-uninstall」を実行するか、
シンボリックリンクを手動で削除します。

```
rm ~/.local/share/cockpit/commander
```
