// ==UserScript==
// @version         2.1
// @name            nyan cat progress bar
// @description     nyannn
// @compatible      firefox
// @compatible      opera
// @compatible      edge
// @match           https://www.youtube.com/*
// @exclude         *://www.youtube.com/tv*
// @exclude         *://www.youtube.com/embed/*
// @exclude         *://www.youtube.com/live_chat*
// @run-at          document-start
// @grant           GM_getValue
// @grant           GM_setValue
// @noframes
// ==/UserScript==

(function() {var css = [`
.ytp-play-progress {
    padding: 2.5px 1px;
    top: -2px;
    /* pretty rainbow */
    background: -webkit-gradient(linear,  left top,  left bottom,
	    color-stop(0.00, #f00),
	    color-stop(17%, #f90),
	    color-stop(33%, #ff0),
	    color-stop(50%, #3f0),
	    color-stop(67%, #09f),
	    color-stop(83%, #63f));
}
.ytp-scrubber-container {
    /* nyanimated png*/
		background: url('https://raw.githubusercontent.com/tntmod54321/Youtube-nyan-cat-progress-bar-userscript/master/nyantianimated.png') no-repeat;
    background-size: 36px;
    width: 40px;
    height: 24px;
    margin-top: -4px;
}
.ytp-scrubber-container:hover {
    /* a bit more visable hover*/
    background-size:45px;
    width: 45px;
    height: 28px;
    margin-top:-6px;
    margin-left:-2px;
}
.ytp-scrubber-button{
    display: none
}
.ytp-progress-bar {
    /*a bit more visable progress bar*/
    height: 10px;
}
.ytp-load-progress {
    /*nyancat background gif*/
    background: url('https://raw.githubusercontent.com/CYuZeric/Youtube-nyan-cat-progress-bar-userscript/master/nyancatbackground.gif') !important;
}
.ytp-progress-bar-container:hover .ytp-scrubber-button .ytp-progress-bar-container:hover .ytp-load-progress{
    image-rendering: pixelated;
}
.html5-progress-bar-container, .ytp-progress-bar-container {
	height: 12px !important;
}
.html5-progress-bar, .ytp-progress-bar {
   margin-top: 12px !important;
}`
].join("\n");
if (typeof GM_addStyle != 'undefined') {
 GM_addStyle(css);
 } else if (typeof PRO_addStyle != 'undefined') {
 PRO_addStyle(css);
 } else if (typeof addStyle != 'undefined') {
 addStyle(css);
 } else {
 var node = document.createElement('style');
 node.type = 'text/css';
 node.appendChild(document.createTextNode(css));
 var heads = document.getElementsByTagName('head');
 if (heads.length > 0) { heads[0].appendChild(node);
 } else {
 document.documentElement.appendChild(node);
 }
}})();
