(function moduleExporter(moduleName, moduleBody) { // http://git.io/WebModule
   "use strict";

    var alias  = moduleName in GLOBAL ? (moduleName + "_") : moduleName; // switch
    var entity = moduleBody(GLOBAL);

    if (typeof modules !== "undefined") {
        GLOBAL["modules"]["register"](alias, moduleBody, entity["repository"]);
    }
    if (typeof exports !== "undefined") {
        module["exports"] = entity;
    }
    GLOBAL[alias] = entity;

})("Easing", function moduleBody(global) {

"use strict";

// These easing functions have borrowed an idea from Robert Penner.
// http://www.robertpenner.com/easing_terms_of_use.html


// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
// --- class / interfaces ----------------------------------
var Easing = {
    "repository": "https://github.com/uupaa/Easing.js", // GitHub repository URL.
};

// --- implements ------------------------------------------
Easing["functions"] = {
      "linear": "(c*t/d+b)", // Easing.linear(t, b, c, d, w1, w2, w3, w4) { return (c*t/d+b); }
                             //     t: Number - current time. from 0.0
                             //     b: Number - beginning value.
                             //     c: Number - change in value(delta value), calc(endValue - beginningValue)
                             //     d: Number - duration time. (unit: ms)
                             //    w1: Number - working variable 1.
                             //    w2: Number - working variable 2.
                             //    w3: Number - working variable 3.
                             //    w4: Number - working variable 4.
    // --- Quad ---
      "inquad": "(w1=t/d,c*w1*w1+b)",                                               // [1]
     "outquad": "(w1=t/d,-c*w1*(w1-2)+b)",                                          // [2]
   "inoutquad": "(w1=t/(d*0.5),w1<1?c*0.5*w1*w1+b:-c*0.5*((--w1)*(w1-2)-1)+b)",     // [3]
    // --- Cubic ---
     "incubic": "(w1=t/d,c*w1*w1*w1+b)",                                            // [4]
    "outcubic": "(w1=t/d-1,c*(w1*w1*w1+1)+b)",                                      // [5]
  "inoutcubic": "(w1=t/(d*0.5),w1<1?c*0.5*w1*w1*w1+b:c*0.5*((w1-=2)*w1*w1+2)+b)",   // [6]
  "outincubic": "(w1=t*2,w2=c*0.5,t<d*0.5?(w3=w1/d-1,w2*(w3*w3*w3+1)+b)" +
                                        ":(w3=(w1-d)/d,w2*w3*w3*w3+b+w2))",         // [7]
    // --- Quart ---
     "inquart": "(w1=t/d,c*w1*w1*w1*w1+b)",                                         // [8]
    "outquart": "(w1=t/d-1,-c*(w1*w1*w1*w1-1)+b)",                                  // [9]
  "inoutquart": "(w1=t/(d*0.5),w1<1?c*0.5*w1*w1*w1*w1+b" +
                                  ":-c*0.5*((w1-=2)*w1*w1*w1-2)+b)",                // [10]
  "outinquart": "(w1=t*2,w2=c*0.5,t<d*0.5?(w3=w1/d-1,-w2*(w3*w3*w3*w3-1)+b)" +
                                        ":(w4=w1-d,w3=w4/d,w2*w3*w3*w3*w3+b+w2))",  // [11]
    // --- Back ---
      "inback": "(w1=t/d,w2=1.70158,c*w1*w1*((w2+1)*w1-w2)+b)",                     // [12]
     "outback": "(w1=t/d-1,w2=1.70158,c*(w1*w1*((w2+1)*w1+w2)+1)+b)",               // [13]
   "inoutback": "(w1=t/(d*0.5),w2=1.525,w3=1.70158," +
                    "w1<1?(c*0.5*(w1*w1*(((w3*=w2)+1)*w1-w3))+b)" +
                        ":(c*0.5*((w1-=2)*w1*(((w3*=w2)+1)*w1+w3)+2)+b))",          // [14]
   "outinback": "(w1=t*2,w2=c*0.5," +
                    "t<d*0.5?(w3=w1/d-1,w4=1.70158,w2*(w3*w3*((w4+1)*w3+w4)+1)+b)" +
                           ":(w3=(w1-d)/d,w4=1.70158,w2*w3*w3*((w4+1)*w3-w4)+b+w2))",//[15]
    // --- Bounce ---
    "inbounce": "(w1=(d-t)/d,w2=7.5625,w3=2.75,c-(w1<(1/w3)?(c*(w2*w1*w1)+0)" +
                ":(w1<(2/w3))?(c*(w2*(w1-=(1.5/w3))*w1+.75)+0):w1<(2.5/w3)" +
                "?(c*(w2*(w1-=(2.25/w3))*w1+.9375)+0)" +
                ":(c*(w2*(w1-=(2.625/w3))*w1+.984375)+0))+b)",                      // [16]
   "outbounce": "(w1=t/d,w2=7.5625,w3=2.75,w1<(1/w3)?(c*(w2*w1*w1)+b)" +
                ":(w1<(2/w3))?(c*(w2*(w1-=(1.5/w3))*w1+.75)+b):w1<(2.5/w3)" +
                "?(c*(w2*(w1-=(2.25/w3))*w1+.9375)+b)" +
                ":(c*(w2*(w1-=(2.625/w3))*w1+.984375)+b))"                          // [17]
};

// --- build -----------------------------------------------
for (var key in Easing["functions"]) {
    Easing[key] = new Function("t,b,c,d,w1,w2,w3,w4",
                               "return " + Easing["functions"][key]);
}

// --- validate and assert functions -----------------------
//{@dev
//function $type(obj, type)      { return GLOBAL["Valid"] ? GLOBAL["Valid"].type(obj, type)    : true; }
//function $keys(obj, str)       { return GLOBAL["Valid"] ? GLOBAL["Valid"].keys(obj, str)     : true; }
//function $some(val, str, ig)   { return GLOBAL["Valid"] ? GLOBAL["Valid"].some(val, str, ig) : true; }
//function $args(fn, args)       { if (GLOBAL["Valid"]) { GLOBAL["Valid"].args(fn, args); } }
//function $valid(val, fn, hint) { if (GLOBAL["Valid"]) { GLOBAL["Valid"](val, fn, hint); } }
//}@dev

return Easing; // return entity

});

