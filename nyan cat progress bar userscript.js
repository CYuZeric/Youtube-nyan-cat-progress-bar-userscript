// ==UserScript==
// @version         1
// @name            nyan cat progress bar
// @description     nyannn
// @compatible      firefox
// @compatible      opera
// @match           https://www.youtube.com/*
// @exclude         *://www.youtube.com/tv*
// @exclude         *://www.youtube.com/embed/*
// @exclude         *://www.youtube.com/live_chat*
// @run-at          document-start
// @grant           GM_getValue
// @grant           GM_setValue
// @noframes
// ==/UserScript==

(function() {var css = [`.ytp-play-progress {
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
    /* nyanimated gif */
    background: url('https://raw.githubusercontent.com/tntmod54321/nyan_cat_progressbar_userscript_resource_host/master/nyanimated.gif') no-repeat;
    background-size: 36px;
    width: 40px;
    height: 24px;
    margin-top: -4px;
}

.ytp-scrubber-container:hover {
    background-size:40px;
    margin-top:-6px;
    margin-left:-2px;
}

.ytp-scrubber-button {
    display: none;
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
