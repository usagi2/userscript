// ==UserScript==
// @name        株探ダイレクトPDF
// @description 株探内のPDFを従来のように直接表示します。
// @namespace   usagi2
// @include     https://kabutan.jp/stock/news?code=*
// @run-at      document-end
// @downloadURL https://raw.githubusercontent.com/usagi2/userscript/master/kabu/KabutanDirectPDF.user.js
// @version     0.2.1
// ==/UserScript==

// a[target="pdf"]
// TODO: https:// 化されたら href^="https://... にする
let links = document.querySelectorAll('a[href*="://kabutan.jp/disclosures/pdf/"]');

for (let i = 0; i < links.length; i++) {
    links[i].setAttribute('href', links[i].getAttribute('href').replace('/kabutan.jp/disclosures/pdf/', '/211.6.211.247/tdnet/data/').replace(/\/$/, '.pdf'));
}



// @include     http://kabutan.jp/disclosures/pdf/*/*/
// @run-at      document-start
/*
location.replace(location.href.replace('/kabutan.jp/disclosures/pdf/', '/211.6.211.247/tdnet/data/').replace(/\/$/, '.pdf'));
*/