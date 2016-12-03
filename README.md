## 專案摘要
研習如何使用 Webpack 作為開發 Angular 2 App 之「Build管理工具」 
。

【參考文件】： Angular 2 官網 [《WEBPACK: AN INTRODUCTION》](https://angular.io/docs/ts/latest/guide/webpack.html)

## 基本需求

 - [NodeJS](https://nodejs.org/) 版本需求：v5+
 
 - NPM 版本需求：v3+
 
 - Global NodeJS Modules:
 
    * webpack
    * typescript
 
```
  $ npm install -g webpack typescript 
```
  

### 操作使用

 (1) 執行 git clone
 
  ```
  $ git clone https://github.com/AlanJui/ng2-webpack-quickstart <LocalRepoName>
  $ cd  <LocalRepoName>
  $ rm -rf .git
  ```
 
 (2) 安裝專案所需使用之「套件（NodeJS Modules）」
  
  ```
  $ npm install
  ``` 
 
 (3) App 開發階段
 
  ```
  $ npm run serve
  ``` 

   使用瀏覽器，觀察「網址」： [http://localhost:8080](http://localhost:8080) 的輸出結果。

 (4) App 單元測試 (Karma)
  
  ```
  $ npm test
  ```

 (5) App 產品階段-打包檔案
    
 將檔案「打包」，置入 `dist` 目錄之中。
  
  ```
  $ npm run build
  ```

 (6) App 產品階段-瀏覽輸出
 
  ```
  $ npm run dist
  ```
  
   使用瀏覽器，觀察「網址」： [http://localhost:8000](http://localhost:8000) 的輸出結果。



##【附註】：
  
(1) 若欲更改開發階段 Web Server 使用的 Port 號，可藉由編輯 `package.json` 檔案，在 `scripts` 裡，變更 port 號。
  
預設的內容：
  
```
scripts": {
  "start": "webpack-dev-server --inline --progress --port 8080",
  ...
}    
```   

(2) 若欲更改產品階段 Web Server 使用的 Port 號，可藉由編輯 `bs-config.json` 檔案，變更 port 號。
  
預設的內容：
  
```
{
  "port": 8000,
  "server": { "baseDir": "./dist" }
}   
```  

## 佈署到 Heroku 平台

(1) 登入 Heroku
```bash
 $ heroku login
 Enter your Heroku credentials.
 Email: alanjui.1960@gmail.com
 Password (typing will be hidden):
 Two-factor code: 506994
 Logged in as alanjui.1960@gmail.com
```

(2) 建立 Keroku App
```bash
 $ heroku create ng2-webpack-quickstart
 Creating ⬢ ng2-webpack-quickstart... done
 https://ng2-webpack-quickstart.herokuapp.com/ | https://git.heroku.com/ng2-webpack-quickstart.git
```

(3) 設定 Buildpacks: Node.js buildpack
```bash
 $ heroku buildpacks:add heroku/nodejs
 Buildpack added. Next release on ng2-webpack-quickstart will use heroku/nodejs.
 Run git push heroku master to create a new release using this buildpack. 
```

(4) 設定 Static Buildpack
```bash
 $ $ heroku buildpacks:add https://github.com/hone/heroku-buildpack-static
   Buildpack added. Next release on ng2-webpack-quickstart will use:
     1. heroku/nodejs
     2. https://github.com/hone/heroku-buildpack-static
   Run git push heroku master to create a new release using these buildpacks.
```

(5) 設定 Config Variables
```bash
 $ heroku config:set ENV=production
   Setting ENV and restarting ⬢ ng2-webpack-quickstart... done, v3
   ENV: production
```

(6) 設定 Web Root 目錄

執行下列指令，用以產生 `static.json` - Web Root 目錄的設定檔。

```bash
 $ heroku static:init
 ? Enter the directory of your app: dist
 ? Drop `.html` extensions from urls? No
 ? Path to custom error page from root directory:
 {
   "root": "dist",
   "clean_urls": false
 }
```

【static.json 檔案內容】：

```json
{
  "root": "dist",
  "clean_urls": false
}
```

(7) 佈署 App 到 Heroku 平台
```bash
 $ git remote -v
 heroku	https://git.heroku.com/ng2-webpack-quickstart.git (fetch)
 heroku	https://git.heroku.com/ng2-webpack-quickstart.git (push)
 origin	git@github.com:AlanJui/ng2-webpack-quickstart.git (fetch)
 origin	git@github.com:AlanJui/ng2-webpack-quickstart.git (push)
 
 $ heroku buildpacks:set https://git.heroku.com/ng2-webpack-quickstart.git
 Buildpack set. Next release on ng2-webpack-quickstart will use:
   1. https://git.heroku.com/ng2-webpack-quickstart.git
   2. https://github.com/hone/heroku-buildpack-static
 Run git push heroku master to create a new release using these buildpacks.
 $ git push heroku master
```

(8) 試行驗證
```bash
 $ heroku open
```

【驗證設定】：

```bash
$ git remote -v
heroku	https://git.heroku.com/ng2-webpack-quickstart.git (fetch)
heroku	https://git.heroku.com/ng2-webpack-quickstart.git (push)
origin	git@github.com:AlanJui/ng2-webpack-quickstart.git (fetch)
origin	git@github.com:AlanJui/ng2-webpack-quickstart.git (push)
```


 - Meet all Heroku prerequisites i.e. free Heroku account and Heroku CLI installed
 - Clone or fork this repository
 - Run dev server the same way as above
 - Create Heroku application with heroku create
 - Add Node.js buildpack: heroku buildpacks:add heroku/nodejs
 - Add static buildpack: heroku buildpacks:add https://github.com/hone/heroku-buildpack-static
 - At the settings page of your app at Heroku set value for CONFIG_VAR config var
 - Deploy the app with git push heroku master
 - Use .env file for config vars of development environment

【參考文章】：  [heroku-angular2-seed](https://github.com/vassiliy/heroku-angular2-seed)


```bash
$ git push heroku master
Counting objects: 117, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (110/110), done.
Writing objects: 100% (117/117), 31.67 KiB | 0 bytes/s, done.
Total 117 (delta 31), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Node.js app detected
remote:
remote: -----> Creating runtime environment
remote:
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NPM_CONFIG_PRODUCTION=true
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:
remote: -----> Installing binaries
remote:        engines.node (package.json):  6.6.0
remote:        engines.npm (package.json):   3.10.3
remote:
remote:        Downloading and installing node 6.6.0...
remote:        npm 3.10.3 already installed with node
remote:
remote: -----> Restoring cache
remote:        Skipping cache restore (new runtime signature)
remote:
remote: -----> Building dependencies
remote:        Installing node modules (package.json)
remote:        angular2-webpack@1.0.0 /tmp/build_ff66c8c6dc168a54d91176e302b4d3fa
remote:        ├── @angular/common@2.2.4
remote:        ├── @angular/compiler@2.2.4
remote:        ├── @angular/core@2.2.4
remote:        ├── @angular/forms@2.2.4
remote:        ├── @angular/http@2.2.4
remote:        ├── @angular/platform-browser@2.2.4
remote:        ├── @angular/platform-browser-dynamic@2.2.4
remote:        ├── @angular/router@3.2.4
remote:        ├── angular-in-memory-web-api@0.1.16
remote:        ├─┬ concurrently@3.1.0
remote:        │ ├── bluebird@2.9.6
remote:        │ ├─┬ chalk@0.5.1
remote:        │ │ ├── ansi-styles@1.1.0
remote:        │ │ ├── escape-string-regexp@1.0.5
remote:        │ │ ├─┬ has-ansi@0.1.0
remote:        │ │ │ └── ansi-regex@0.2.1
remote:        │ │ ├── strip-ansi@0.3.0
remote:        │ │ └── supports-color@0.2.0
remote:        │ ├── commander@2.6.0
remote:        │ ├── lodash@4.17.2
remote:        │ ├── moment@2.17.0
remote:        │ ├── rx@2.3.24
remote:        │ ├── spawn-default-shell@1.1.0
remote:        │ └── tree-kill@1.1.0
remote:        ├── core-js@2.4.1
remote:        ├─┬ lite-server@2.2.2
remote:        │ ├─┬ browser-sync@2.18.2
remote:        │ │ ├─┬ browser-sync-client@2.4.3
remote:        │ │ │ ├── etag@1.7.0
remote:        │ │ │ └── fresh@0.3.0
remote:        │ │ ├─┬ browser-sync-ui@0.6.1
remote:        │ │ │ ├── async-each-series@0.1.1
remote:        │ │ │ ├─┬ stream-throttle@0.1.3
remote:        │ │ │ │ └── limiter@1.1.0
remote:        │ │ │ └─┬ weinre@2.0.0-pre-I0Z7U9OV
remote:        │ │ │   ├─┬ express@2.5.11
remote:        │ │ │   │ ├─┬ connect@1.9.2
remote:        │ │ │   │ │ └── formidable@1.0.17
remote:        │ │ │   │ ├── mime@1.2.4
remote:        │ │ │   │ ├── mkdirp@0.3.0
remote:        │ │ │   │ └── qs@0.4.2
remote:        │ │ │   ├─┬ nopt@3.0.6
remote:        │ │ │   │ └── abbrev@1.0.9
remote:        │ │ │   └── underscore@1.7.0
remote:        │ │ ├── bs-recipes@1.3.2
remote:        │ │ ├─┬ chokidar@1.6.0
remote:        │ │ │ ├─┬ anymatch@1.3.0
remote:        │ │ │ │ └── arrify@1.0.1
remote:        │ │ │ ├── async-each@1.0.1
remote:        │ │ │ ├── glob-parent@2.0.0
remote:        │ │ │ ├─┬ is-binary-path@1.0.1
remote:        │ │ │ │ └── binary-extensions@1.7.0
remote:        │ │ │ ├── is-glob@2.0.1
remote:        │ │ │ └─┬ readdirp@2.1.0
remote:        │ │ │   ├─┬ readable-stream@2.2.2
remote:        │ │ │   │ ├── buffer-shims@1.0.0
remote:        │ │ │   │ ├── core-util-is@1.0.2
remote:        │ │ │   │ ├── isarray@1.0.0
remote:        │ │ │   │ ├── process-nextick-args@1.0.7
remote:        │ │ │   │ ├── string_decoder@0.10.31
remote:        │ │ │   │ └── util-deprecate@1.0.2
remote:        │ │ │   └── set-immediate-shim@1.0.1
remote:        │ │ ├─┬ connect@3.5.0
remote:        │ │ │ ├─┬ debug@2.2.0
remote:        │ │ │ │ └── ms@0.7.1
remote:        │ │ │ ├─┬ finalhandler@0.5.0
remote:        │ │ │ │ ├─┬ on-finished@2.3.0
remote:        │ │ │ │ │ └── ee-first@1.1.1
remote:        │ │ │ │ ├── statuses@1.3.1
remote:        │ │ │ │ └── unpipe@1.0.0
remote:        │ │ │ ├── parseurl@1.3.1
remote:        │ │ │ └── utils-merge@1.0.0
remote:        │ │ ├── dev-ip@1.0.1
remote:        │ │ ├─┬ easy-extender@2.3.2
remote:        │ │ │ └── lodash@3.10.1
remote:        │ │ ├─┬ eazy-logger@3.0.2
remote:        │ │ │ └─┬ tfunk@3.0.2
remote:        │ │ │   ├─┬ chalk@1.1.3
remote:        │ │ │   │ ├── ansi-styles@2.2.1
remote:        │ │ │   │ ├─┬ has-ansi@2.0.0
remote:        │ │ │   │ │ └── ansi-regex@2.0.0
remote:        │ │ │   │ ├── strip-ansi@3.0.1
remote:        │ │ │   │ └── supports-color@2.0.0
remote:        │ │ │   └── object-path@0.9.2
remote:        │ │ ├── emitter-steward@1.0.0
remote:        │ │ ├─┬ fs-extra@0.30.0
remote:        │ │ │ ├── graceful-fs@4.1.11
remote:        │ │ │ ├── jsonfile@2.4.0
remote:        │ │ │ └── klaw@1.3.1
remote:        │ │ ├─┬ http-proxy@1.15.1
remote:        │ │ │ ├── eventemitter3@1.2.0
remote:        │ │ │ └── requires-port@1.0.0
remote:        │ │ ├── immutable@3.8.1
remote:        │ │ ├─┬ localtunnel@1.8.1
remote:        │ │ │ ├── openurl@1.1.0
remote:        │ │ │ ├─┬ request@2.65.0
remote:        │ │ │ │ ├── aws-sign2@0.6.0
remote:        │ │ │ │ ├─┬ bl@1.0.3
remote:        │ │ │ │ │ └── readable-stream@2.0.6
remote:        │ │ │ │ ├── caseless@0.11.0
remote:        │ │ │ │ ├─┬ combined-stream@1.0.5
remote:        │ │ │ │ │ └── delayed-stream@1.0.0
remote:        │ │ │ │ ├── extend@3.0.0
remote:        │ │ │ │ ├── forever-agent@0.6.1
remote:        │ │ │ │ ├─┬ form-data@1.0.1
remote:        │ │ │ │ │ └── async@2.1.4
remote:        │ │ │ │ ├─┬ har-validator@2.0.6
remote:        │ │ │ │ │ ├─┬ chalk@1.1.3
remote:        │ │ │ │ │ │ ├── ansi-styles@2.2.1
remote:        │ │ │ │ │ │ ├─┬ has-ansi@2.0.0
remote:        │ │ │ │ │ │ │ └── ansi-regex@2.0.0
remote:        │ │ │ │ │ │ ├── strip-ansi@3.0.1
remote:        │ │ │ │ │ │ └── supports-color@2.0.0
remote:        │ │ │ │ │ ├─┬ commander@2.9.0
remote:        │ │ │ │ │ │ └── graceful-readlink@1.0.1
remote:        │ │ │ │ │ └─┬ is-my-json-valid@2.15.0
remote:        │ │ │ │ │   ├── generate-function@2.0.0
remote:        │ │ │ │ │   ├─┬ generate-object-property@1.2.0
remote:        │ │ │ │ │   │ └── is-property@1.0.2
remote:        │ │ │ │ │   ├── jsonpointer@4.0.0
remote:        │ │ │ │ │   └── xtend@4.0.1
remote:        │ │ │ │ ├─┬ hawk@3.1.3
remote:        │ │ │ │ │ ├── boom@2.10.1
remote:        │ │ │ │ │ ├── cryptiles@2.0.5
remote:        │ │ │ │ │ ├── hoek@2.16.3
remote:        │ │ │ │ │ └── sntp@1.0.9
remote:        │ │ │ │ ├─┬ http-signature@0.11.0
remote:        │ │ │ │ │ ├── asn1@0.1.11
remote:        │ │ │ │ │ ├── assert-plus@0.1.5
remote:        │ │ │ │ │ └── ctype@0.5.3
remote:        │ │ │ │ ├── isstream@0.1.2
remote:        │ │ │ │ ├── json-stringify-safe@5.0.1
remote:        │ │ │ │ ├── node-uuid@1.4.7
remote:        │ │ │ │ ├── oauth-sign@0.8.2
remote:        │ │ │ │ ├── qs@5.2.1
remote:        │ │ │ │ ├── stringstream@0.0.5
remote:        │ │ │ │ ├── tough-cookie@2.2.2
remote:        │ │ │ │ └── tunnel-agent@0.4.3
remote:        │ │ │ └─┬ yargs@3.29.0
remote:        │ │ │   ├── camelcase@1.2.1
remote:        │ │ │   └── window-size@0.1.4
remote:        │ │ ├─┬ micromatch@2.3.11
remote:        │ │ │ ├─┬ arr-diff@2.0.0
remote:        │ │ │ │ └── arr-flatten@1.0.1
remote:        │ │ │ ├── array-unique@0.2.1
remote:        │ │ │ ├─┬ braces@1.8.5
remote:        │ │ │ │ ├─┬ expand-range@1.8.2
remote:        │ │ │ │ │ └─┬ fill-range@2.2.3
remote:        │ │ │ │ │   ├── is-number@2.1.0
remote:        │ │ │ │ │   ├── isobject@2.1.0
remote:        │ │ │ │ │   ├── randomatic@1.1.6
remote:        │ │ │ │ │   └── repeat-string@1.6.1
remote:        │ │ │ │ ├── preserve@0.2.0
remote:        │ │ │ │ └── repeat-element@1.1.2
remote:        │ │ │ ├─┬ expand-brackets@0.1.5
remote:        │ │ │ │ └── is-posix-bracket@0.1.1
remote:        │ │ │ ├── extglob@0.3.2
remote:        │ │ │ ├── filename-regex@2.0.0
remote:        │ │ │ ├── is-extglob@1.0.0
remote:        │ │ │ ├─┬ kind-of@3.0.4
remote:        │ │ │ │ └── is-buffer@1.1.4
remote:        │ │ │ ├── normalize-path@2.0.1
remote:        │ │ │ ├─┬ object.omit@2.0.1
remote:        │ │ │ │ ├─┬ for-own@0.1.4
remote:        │ │ │ │ │ └── for-in@0.1.6
remote:        │ │ │ │ └── is-extendable@0.1.1
remote:        │ │ │ ├─┬ parse-glob@3.0.4
remote:        │ │ │ │ ├── glob-base@0.3.0
remote:        │ │ │ │ └── is-dotfile@1.0.2
remote:        │ │ │ └─┬ regex-cache@0.4.3
remote:        │ │ │   ├── is-equal-shallow@0.1.3
remote:        │ │ │   └── is-primitive@2.0.0
remote:        │ │ ├─┬ opn@4.0.2
remote:        │ │ │ ├── object-assign@4.1.0
remote:        │ │ │ └─┬ pinkie-promise@2.0.1
remote:        │ │ │   └── pinkie@2.0.4
remote:        │ │ ├─┬ portscanner@1.2.0
remote:        │ │ │ └── async@1.5.2
remote:        │ │ ├── qs@6.2.1
remote:        │ │ ├── resp-modifier@6.0.2
remote:        │ │ ├── rx@4.1.0
remote:        │ │ ├─┬ serve-index@1.8.0
remote:        │ │ │ ├─┬ accepts@1.3.3
remote:        │ │ │ │ └── negotiator@0.6.1
remote:        │ │ │ ├── batch@0.5.3
remote:        │ │ │ ├── escape-html@1.0.3
remote:        │ │ │ ├─┬ http-errors@1.5.1
remote:        │ │ │ │ └── setprototypeof@1.0.2
remote:        │ │ │ └─┬ mime-types@2.1.13
remote:        │ │ │   └── mime-db@1.25.0
remote:        │ │ ├─┬ serve-static@1.11.1
remote:        │ │ │ ├── encodeurl@1.0.1
remote:        │ │ │ └─┬ send@0.14.1
remote:        │ │ │   ├── depd@1.1.0
remote:        │ │ │   ├── destroy@1.0.4
remote:        │ │ │   ├── mime@1.3.4
remote:        │ │ │   └── range-parser@1.2.0
remote:        │ │ ├── server-destroy@1.0.1
remote:        │ │ ├─┬ socket.io@1.5.0
remote:        │ │ │ ├─┬ engine.io@1.7.0
remote:        │ │ │ │ ├── base64id@0.1.0
remote:        │ │ │ │ ├─┬ engine.io-parser@1.3.0
remote:        │ │ │ │ │ ├── after@0.8.1
remote:        │ │ │ │ │ ├── arraybuffer.slice@0.0.6
remote:        │ │ │ │ │ ├── base64-arraybuffer@0.1.5
remote:        │ │ │ │ │ ├── blob@0.0.4
remote:        │ │ │ │ │ ├─┬ has-binary@0.1.6
remote:        │ │ │ │ │ │ └── isarray@0.0.1
remote:        │ │ │ │ │ └── wtf-8@1.0.0
remote:        │ │ │ │ └─┬ ws@1.1.1
remote:        │ │ │ │   ├── options@0.0.6
remote:        │ │ │ │   └── ultron@1.0.2
remote:        │ │ │ ├─┬ has-binary@0.1.7
remote:        │ │ │ │ └── isarray@0.0.1
remote:        │ │ │ ├─┬ socket.io-adapter@0.4.0
remote:        │ │ │ │ └─┬ socket.io-parser@2.2.2
remote:        │ │ │ │   ├── debug@0.7.4
remote:        │ │ │ │   ├── isarray@0.0.1
remote:        │ │ │ │   └── json3@3.2.6
remote:        │ │ │ ├─┬ socket.io-client@1.5.0
remote:        │ │ │ │ ├── backo2@1.0.2
remote:        │ │ │ │ ├── component-bind@1.0.0
remote:        │ │ │ │ ├── component-emitter@1.2.0
remote:        │ │ │ │ ├─┬ engine.io-client@1.7.0
remote:        │ │ │ │ │ ├── component-inherit@0.0.3
remote:        │ │ │ │ │ ├── has-cors@1.1.0
remote:        │ │ │ │ │ ├── parsejson@0.0.1
remote:        │ │ │ │ │ ├── parseqs@0.0.2
remote:        │ │ │ │ │ ├── xmlhttprequest-ssl@1.5.1
remote:        │ │ │ │ │ └── yeast@0.1.2
remote:        │ │ │ │ ├── indexof@0.0.1
remote:        │ │ │ │ ├── object-component@0.0.3
remote:        │ │ │ │ ├─┬ parseuri@0.0.4
remote:        │ │ │ │ │ └─┬ better-assert@1.0.2
remote:        │ │ │ │ │   └── callsite@1.0.0
remote:        │ │ │ │ └── to-array@0.1.4
remote:        │ │ │ └─┬ socket.io-parser@2.2.6
remote:        │ │ │   ├── benchmark@1.0.0
remote:        │ │ │   ├── component-emitter@1.1.2
remote:        │ │ │   ├── isarray@0.0.1
remote:        │ │ │   └── json3@3.3.2
remote:        │ │ ├── ua-parser-js@0.7.10
remote:        │ │ └─┬ yargs@6.0.0
remote:        │ │   ├─┬ cliui@3.2.0
remote:        │ │   │ ├─┬ strip-ansi@3.0.1
remote:        │ │   │ │ └── ansi-regex@2.0.0
remote:        │ │   │ └─┬ wrap-ansi@2.1.0
remote:        │ │   │   └─┬ strip-ansi@3.0.1
remote:        │ │   │     └── ansi-regex@2.0.0
remote:        │ │   ├── decamelize@1.2.0
remote:        │ │   ├── get-caller-file@1.0.2
remote:        │ │   ├─┬ os-locale@1.4.0
remote:        │ │   │ └─┬ lcid@1.0.0
remote:        │ │   │   └── invert-kv@1.0.0
remote:        │ │   ├─┬ read-pkg-up@1.0.1
remote:        │ │   │ ├─┬ find-up@1.1.2
remote:        │ │   │ │ └── path-exists@2.1.0
remote:        │ │   │ └─┬ read-pkg@1.1.0
remote:        │ │   │   ├─┬ load-json-file@1.1.0
remote:        │ │   │   │ ├─┬ parse-json@2.2.0
remote:        │ │   │   │ │ └─┬ error-ex@1.3.0
remote:        │ │   │   │ │   └── is-arrayish@0.2.1
remote:        │ │   │   │ ├── pify@2.3.0
remote:        │ │   │   │ └─┬ strip-bom@2.0.0
remote:        │ │   │   │   └── is-utf8@0.2.1
remote:        │ │   │   ├─┬ normalize-package-data@2.3.5
remote:        │ │   │   │ ├── hosted-git-info@2.1.5
remote:        │ │   │   │ ├─┬ is-builtin-module@1.0.0
remote:        │ │   │   │ │ └── builtin-modules@1.1.1
remote:        │ │   │   │ ├── semver@5.3.0
remote:        │ │   │   │ └─┬ validate-npm-package-license@3.0.1
remote:        │ │   │   │   ├─┬ spdx-correct@1.0.2
remote:        │ │   │   │   │ └── spdx-license-ids@1.2.2
remote:        │ │   │   │   └── spdx-expression-parse@1.0.4
remote:        │ │   │   └── path-type@1.1.0
remote:        │ │   ├── require-directory@2.1.1
remote:        │ │   ├── require-main-filename@1.0.1
remote:        │ │   ├── set-blocking@2.0.0
remote:        │ │   ├─┬ string-width@1.0.2
remote:        │ │   │ ├── code-point-at@1.1.0
remote:        │ │   │ ├─┬ is-fullwidth-code-point@1.0.0
remote:        │ │   │ │ └── number-is-nan@1.0.1
remote:        │ │   │ └─┬ strip-ansi@3.0.1
remote:        │ │   │   └── ansi-regex@2.0.0
remote:        │ │   ├── which-module@1.0.0
remote:        │ │   ├── window-size@0.2.0
remote:        │ │   ├── y18n@3.2.1
remote:        │ │   └─┬ yargs-parser@4.2.0
remote:        │ │     └── camelcase@3.0.0
remote:        │ ├── connect-history-api-fallback@1.3.0
remote:        │ ├── connect-logger@0.0.1
remote:        │ └── minimist@1.2.0
remote:        ├── reflect-metadata@0.1.8
remote:        ├─┬ rimraf@2.5.4
remote:        │ └─┬ glob@7.1.1
remote:        │   ├── fs.realpath@1.0.0
remote:        │   ├─┬ inflight@1.0.6
remote:        │   │ └── wrappy@1.0.2
remote:        │   ├── inherits@2.0.3
remote:        │   ├─┬ minimatch@3.0.3
remote:        │   │ └─┬ brace-expansion@1.1.6
remote:        │   │   ├── balanced-match@0.4.2
remote:        │   │   └── concat-map@0.0.1
remote:        │   ├── once@1.4.0
remote:        │   └── path-is-absolute@1.0.1
remote:        ├─┬ rxjs@5.0.0-beta.12
remote:        │ └── symbol-observable@1.0.4
remote:        ├─┬ systemjs@0.19.40
remote:        │ └── when@3.7.7
remote:        └── zone.js@0.6.26
remote:
remote:
remote: -----> Caching build
remote:        Clearing previous node cache
remote:        Saving 2 cacheDirectories (default):
remote:        - node_modules
remote:        - bower_components (nothing to cache)
remote:
remote: -----> Build succeeded!
remote:        ├── @angular/common@2.2.4
remote:        ├── @angular/compiler@2.2.4
remote:        ├── @angular/core@2.2.4
remote:        ├── @angular/forms@2.2.4
remote:        ├── @angular/http@2.2.4
remote:        ├── @angular/platform-browser@2.2.4
remote:        ├── @angular/platform-browser-dynamic@2.2.4
remote:        ├── @angular/router@3.2.4
remote:        ├── angular-in-memory-web-api@0.1.16
remote:        ├── concurrently@3.1.0
remote:        ├── core-js@2.4.1
remote:        ├── lite-server@2.2.2
remote:        ├── reflect-metadata@0.1.8
remote:        ├── rxjs@5.0.0-beta.12
remote:        ├── systemjs@0.19.40
remote:        └── zone.js@0.6.26
remote:
remote: -----> Static HTML app detected
remote:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
remote:                                  Dload  Upload   Total   Spent    Left  Speed
remote: 100  838k  100  838k    0     0  3671k      0 --:--:-- --:--:-- --:--:-- 3678k
remote: -----> Installed directory to /app/bin
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote:
remote: -----> Compressing...
remote:        Done: 27M
remote: -----> Launching...
remote:        Released v4
remote:        https://ng2-webpack-quickstart.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/ng2-webpack-quickstart.git
 * [new branch]      master -> master
```


 ## 事前準備
 
 Install the Static CLI Plugin
 
 In order to take advantage of this beta product, we provide a set of commands for the Heroku Toolbelt in the static namespace. To get this, you'll need to install the heroku-cli-static plugin.
 
    $ heroku plugins:install heroku-cli-static
    
Run the app locally

To get the app running, you first need the dependencies for your application. The way this app is setup, the following command will install all the dependencies as well as build the assets into a public/ directory. We'll be using npm which is the node package manager.

    $ NODE_ENV=production npm install

Now start your application locally using the heroku local command, which was installed as part of the Toolbelt:

    $ heroku local web

Just like Heroku, heroku local examines the Procfile to determine what to run.

Open http://localhost:8080 with your web browser. You should see your app running locally.

To stop the app from running locally, in the CLI, press Ctrl+C to exit.


### package.json
    
```json
"scripts": {
    "serv": "webpack-dev-server --inline --progress --port 8080",
    "test": "karma start",
    "build": "rimraf dist && node node_modules/.bin/webpack --config config/webpack.prod.js --progress --profile --bail",
    "postinstall": "npm run build",
    "server": "webpack-dev-server --inline --colors --progress --display-error-details --display-cached --port 3000  --content-base src",
    "start": "npm run server",
    "dist": "lite-server --config bs-config.json",
    "prod": "npm run build && npm run dist"
  },
```    