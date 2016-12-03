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

### 首次佈署的籌備作業

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
   
 $ heroku config:set NPM_CONFIG_PRODUCTION=false
 Setting NPM_CONFIG_PRODUCTION and restarting ⬢ ng2-webpack-quickstart... done, v8
 NPM_CONFIG_PRODUCTION: false  
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

### 佈署作業

(1) 將待檔案到 Local Git Repo

```bash
 $ git add .
 $ git commit -m "為何要納管檔案的說明"
```

(2) 佈署 App 到 Heroku 平台
```bash
 $ git push heroku master
```

【驗證 Heroku 該有的設定】：

Heroku 的 App 佈署作業要能正確運作，則 Heroku 取用的「Git Remote Repo」來源設定要設好。若是不確定的話，可用如下之 `git remote` 指令來查驗： 

```bash
$ git remote -v
heroku	https://git.heroku.com/ng2-webpack-quickstart.git (fetch)
heroku	https://git.heroku.com/ng2-webpack-quickstart.git (push)
origin	git@github.com:AlanJui/ng2-webpack-quickstart.git (fetch)
origin	git@github.com:AlanJui/ng2-webpack-quickstart.git (push)
```

(3) 驗證「佈署作業」成功
```bash
 $ heroku open
```

【參考文章】： 
 - [heroku-angular2-seed](https://github.com/vassiliy/heroku-angular2-seed)
 - [Webpack not found, deploying to Heroku](http://stackoverflow.com/questions/39457619/webpack-not-found-deploying-to-heroku)

