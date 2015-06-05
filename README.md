# Easing.js [![Build Status](https://travis-ci.org/uupaa/Easing.js.svg)](https://travis-ci.org/uupaa/Easing.js)

[![npm](https://nodei.co/npm/uupaa.easing.js.svg?downloads=true&stars=true)](https://nodei.co/npm/uupaa.easing.js/)

Easing functions.

## Document

- Easing.js made of [WebModule](https://github.com/uupaa/WebModule).
- [Spec](https://github.com/uupaa/Easing.js/wiki/Easing)

## Browser and NW.js(node-webkit)

```js
<script src="<your-install-dir>/lib/WebModule.js"></script>
<script src="<your-install-dir>/lib/Easing.js"></script>
<script>
var range = { start: 20, end: 300, time: 1000 };

var startValue  = range.start;
var endValue    = range.end;

var startTime   = Date.now();
var currentTime = 0;
var endTime     = range.time;

var div         = document.body.appendChild( document.createElement("div") );

(function _tick() {
    currentTime = Date.now() - startTime;
    var finished = currentTime >= endTime;

    var x = Easing["linear"](finished ? endTime : currentTime,
                               startValue,
                               endValue - startValue,
                               endTime);

    div.style.left = x + "px";

    if (finished) {
        ;
    } else {
        setTimeout(_tick, 0);
    }
})();
</script>
```

## WebWorkers

```js
importScripts("<your-install-dir>lib/WebModule.js");
importScripts("<your-install-dir>lib/Easing.js");

```

## Node.js

```js
require("<your-install-dir>lib/WebModule.js");
require("<your-install-dir>lib/Easing.js");

```

