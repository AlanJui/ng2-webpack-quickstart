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
  $ rm .git
  ```
 
 (2) 安裝專案所需使用之 NodeJS Modules
  
  ```
  $ npm install
  ``` 
 
 (3) App 開發階段
 
  ```
  $ npm start
  ``` 
 
 (4) App 單元測試 (Karma)
  
  ```
  $ npm test
  ```

 (5) App 產品階段-打包檔案
    
    將檔案「打包」，並置入 `dist` 目錄之中
  
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
