var ModuleTestEasing = (function(global) {

global["BENCHMARK"] = false;

var test = new Test("Easing", {
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     false, // enable worker test.
        node:       false, // enable node test.
        nw:         true,  // enable nw.js test.
        button:     true,  // show button.
        both:       false, // test the primary and secondary modules.
        ignoreError:false, // ignore error.
        callback:   function() {
        },
        errorback:  function(error) {
        }
    }).add([
        testEasing
    ]);

if (IN_BROWSER || IN_NW) {
    test.add([
        // browser and node-webkit test
    ]);
} else if (IN_WORKER) {
    test.add([
        // worker test
    ]);
} else if (IN_NODE) {
    test.add([
        // node.js and io.js test
    ]);
}

// --- test cases ------------------------------------------
function testEasing(test, pass, miss) {
    var range = { start: 20, end: 300, time: 1000 };

    _move(range.start, range.end, range.time, function() {
        _move(range.end, range.start, range.time, function() {
            if (_isOK(range.start)) {
                test.done(pass());
            } else {
                test.done(miss());
            }
        });
    });
}

function _isOK(x) {
    for (var i = 0; i < 18; ++i) {
        var node = document.querySelector("#Particle" + i);
        if ( parseInt(node.style.left, 10) !== x ) {
            return false;
        }
    }
    return true;
}

function _move(start, end, time, callback) {
    var startValue  = start;
    var endValue    = end;

    var startTime   = Date.now();
    var currentTime = 0;
    var endTime     = time;

    var particle    = [];

    function _createParticle(id, x, y, w, h, color) {
        var node = document.querySelector("#" + id);

        if (node) {
            // reuse DOM Node
        } else {
            node = document.createElement("div");
            node.id = id;
        }
        node.style.cssText = "position:absolute;" +
                             "left:"   + x + "px;" +
                             "top:"    + y + "px;" +
                             "width:"  + w + "px;" +
                             "height:" + h + "px;" +
                             "background-color:" + color;
        return node;
    }

    for (var i = 0; i < 18; ++i) {
        var node = _createParticle("Particle" + i,
                                   start,    // init x
                                   i * 16,   // init y
                                   16,       // width
                                   16,       // height
                                   "rgb(" + i * 5 + "%,0%,0%)");
        if (node.parentNode) {
            // reuse attached DOM Node
        } else {
            document.body.appendChild(node);
        }
        particle.push(node);
    }

    (function _tick() {
        currentTime = Date.now() - startTime;

        var finished = currentTime >= endTime;
        var keys = Object.keys(Easing.functions);

        for (var i = 0, iz = keys.length; i < iz; ++i) {
            var x = Easing[keys[i]](finished ? endTime
                                             : currentTime,
                                    startValue,
                                    endValue - startValue,
                                    endTime);

            particle[i].style.left = x + "px";
        }
        if (!finished) {
            setTimeout(_tick, 0);
        } else {
            callback();
        }
    })();
}


return test.run();

})(GLOBAL);

