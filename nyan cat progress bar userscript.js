// ==UserScript==
// @name            nyan cat progress bar
// @version         2.2
// @updatedate      2024-10-18
// @description     nyannn
// @match           https://www.youtube.com/*
// @exclude         *://www.youtube.com/tv*
// @exclude         *://www.youtube.com/embed/*
// @exclude         *://www.youtube.com/live_chat*
// @run-at          document-start
// @grant           GM_getValue
// @grant           GM_setValue
// @noframes
// ==/UserScript==

(function() {
    const css = `
        .ytp-play-progress {
            padding: 2.5px 1px;
            top: -2px;
            /* pretty rainbow with modern syntax */
            background: linear-gradient(
                to bottom,
                #f00 0%,
                #f90 17%,
                #ff0 33%,
                #3f0 50%,
                #09f 67%,
                #63f 83%
            ) !important;
            opacity: 1 !important;
            z-index: 1000 !important;
        }
        .ytp-scrubber-container {
            background: url('https://raw.githubusercontent.com/CYuZeric/Youtube-nyan-cat-progress-bar-userscript/master/nyanimated.gif') no-repeat;
            background-size: 36px;
            width: 40px;
            height: 24px;
            margin-top: -4px;
        }
        .ytp-scrubber-container:hover {
            background-size: 45px;
            width: 45px;
            height: 28px;
            margin-top: -6px;
            margin-left: -2px;
        }
        .ytp-scrubber-button {
            display: none;
        }
        .ytp-progress-bar {
            height: 10px;
        }
        .ytp-load-progress {
            background: url('https://raw.githubusercontent.com/CYuZeric/Youtube-nyan-cat-progress-bar-userscript/master/nyancatbackground.gif') !important;
        }
        .ytp-progress-bar-container:hover .ytp-scrubber-button .ytp-progress-bar-container:hover .ytp-load-progress {
            image-rendering: pixelated;
        }
        .html5-progress-bar-container, .ytp-progress-bar-container {
            height: 12px !important;
        }
        .html5-progress-bar, .ytp-progress-bar {
            margin-top: 12px !important;
        }
    `;

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
        if (heads.length > 0) {
            heads[0].appendChild(node);
        } else {
            document.documentElement.appendChild(node);
        }
    }
})();
