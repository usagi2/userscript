// ==UserScript==
// @name        株探ダイレクトPDF
// @description 株探内のPDFを従来のように直接表示します。戻るボタンが効かなくなるので新しいタブで開いてください。
// @namespace   usagi2
// @include     http://kabutan.jp/disclosures/pdf/*/*/
// @run-at      document-start
// @downloadURL https://github.com/usagi2/userscript/raw/master/kabu/KabutanDirectPDF.user.js
// @version     0.1.5
// ==/UserScript==

'use strict';

location.href = location.href.replace('/kabutan.jp/disclosures/pdf/', '/211.6.211.247/tdnet/data/').replace(/\/$/, '.pdf');