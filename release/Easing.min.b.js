(function(global){
'use strict';(function(b) {
  function a() {
  }
  a.functions = {linear:"(c*t/d+b)", inquad:"(w1=t/d,c*w1*w1+b)", outquad:"(w1=t/d,-c*w1*(w1-2)+b)", inoutquad:"(w1=t/(d*0.5),w1<1?c*0.5*w1*w1+b:-c*0.5*((--w1)*(w1-2)-1)+b)", incubic:"(w1=t/d,c*w1*w1*w1+b)", outcubic:"(w1=t/d-1,c*(w1*w1*w1+1)+b)", inoutcubic:"(w1=t/(d*0.5),w1<1?c*0.5*w1*w1*w1+b:c*0.5*((w1-=2)*w1*w1+2)+b)", outincubic:"(w1=t*2,w2=c*0.5,t<d*0.5?(w3=w1/d-1,w2*(w3*w3*w3+1)+b):(w3=(w1-d)/d,w2*w3*w3*w3+b+w2))", inquart:"(w1=t/d,c*w1*w1*w1*w1+b)", outquart:"(w1=t/d-1,-c*(w1*w1*w1*w1-1)+b)", 
  inoutquart:"(w1=t/(d*0.5),w1<1?c*0.5*w1*w1*w1*w1+b:-c*0.5*((w1-=2)*w1*w1*w1-2)+b)", outinquart:"(w1=t*2,w2=c*0.5,t<d*0.5?(w3=w1/d-1,-w2*(w3*w3*w3*w3-1)+b):(w4=w1-d,w3=w4/d,w2*w3*w3*w3*w3+b+w2))", inback:"(w1=t/d,w2=1.70158,c*w1*w1*((w2+1)*w1-w2)+b)", outback:"(w1=t/d-1,w2=1.70158,c*(w1*w1*((w2+1)*w1+w2)+1)+b)", inoutback:"(w1=t/(d*0.5),w2=1.525,w3=1.70158,w1<1?(c*0.5*(w1*w1*(((w3*=w2)+1)*w1-w3))+b):(c*0.5*((w1-=2)*w1*(((w3*=w2)+1)*w1+w3)+2)+b))", outinback:"(w1=t*2,w2=c*0.5,t<d*0.5?(w3=w1/d-1,w4=1.70158,w2*(w3*w3*((w4+1)*w3+w4)+1)+b):(w3=(w1-d)/d,w4=1.70158,w2*w3*w3*((w4+1)*w3-w4)+b+w2))", 
  inbounce:"(w1=(d-t)/d,w2=7.5625,w3=2.75,c-(w1<(1/w3)?(c*(w2*w1*w1)+0):(w1<(2/w3))?(c*(w2*(w1-=(1.5/w3))*w1+.75)+0):w1<(2.5/w3)?(c*(w2*(w1-=(2.25/w3))*w1+.9375)+0):(c*(w2*(w1-=(2.625/w3))*w1+.984375)+0))+b)", outbounce:"(w1=t/d,w2=7.5625,w3=2.75,w1<(1/w3)?(c*(w2*w1*w1)+b):(w1<(2/w3))?(c*(w2*(w1-=(1.5/w3))*w1+.75)+b):w1<(2.5/w3)?(c*(w2*(w1-=(2.25/w3))*w1+.9375)+b):(c*(w2*(w1-=(2.625/w3))*w1+.984375)+b))"};
  for (var c in a.functions) {
    a[c] = new Function("t,b,c,d,w1,w2,w3,w4", "return " + a.functions[c]);
  }
  "process" in b && (module.exports = a);
  b["Easing" in b ? "Easing_" : "Easing"] = a;
})((this || 0).self || global);

})((this||0).self||global);
