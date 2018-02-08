# DS2018-TipsAndTricks
ArcGIS APi for JavaScript: Tips and Tricks for Developing and Debugging Apps 



### [Code Assist Demo](CodeAssistDemos/javascript-demo/README.md)
### Snippets use in VSCode, Sublime, Atom
    1. Demo creating snippet 
    2. Add snippet to Sublime or VSCode and show how to use 
    3. Also show a demo of combining a few Emmet shortcuts and snippets to setup project 
        (link:css ! etc )

    Resources :
     [Tool to create snippets](https://pawelgrzybek.com/snippet-generator/)
     [My snippet library](https://github.com/kellyhutchins/Code-Snippets-JSAPI)
     [Emmet support for Sublime Text 3](https://emmet.io/blog/sublime-text-3/)
     [Emmet cheat sheet](https://docs.emmet.io/cheat-sheet/)

### Local Web Server 

Setting up a development web server is an easy way to quickly develop and test your apps built with the ArcGIS API for JavaScript without having to setup something like Apache or IIS. 

* Many IDE's have extensions or plug-ins you can install. One example is Live Server in VSCode
* Another option is to use [Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment) to create a simple web server within your project. 
    1. Install express
            ```
            npm install express
            ```
    2. Create a simple file - in the sample app we name it server.js and paste the following code: 

            ```
            const express = require('express');
            const app = express();
            const root = `${__dirname}/dist`;

            app.use(express.static(root));
            app.listen(5678);

            console.log('Running on http://localhost:' + 5678);

            ```
    3. Open a command prompt in the app folder and type ``` node server.js ```
    4. Open a browser and point it to the url specified in the console and you should see your app.

[Development Server Demo](Developm/Express)



### Dev Tool Workspaces 
    * Persist dev tool changes locally https://developers.google.com/web/tools/setup/setup-workflow

### Useful Browser Extensions 
    * Accessibility Testing [Axe accessibility extenstion](https://axe-core.org/about/) 
        **  Axe Coconut (like Chrome Canary or Firefox Nightly)
    * Quickly check out fonts used on web page [WhatFont](http://www.chengyinliu.com/whatfont.html)
    * JSON Prettifier (I use JSONView in Chrome ) [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)
    * Screen Reader [ChromeVox](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en)





