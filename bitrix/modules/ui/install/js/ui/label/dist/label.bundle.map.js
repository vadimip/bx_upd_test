{"version":3,"sources":["label.bundle.js"],"names":["this","BX","exports","main_core","LabelColor","babelHelpers","classCallCheck","defineProperty","LabelSize","_templateObject","_templateObject2","_templateObject3","_templateObject4","Label","options","text","color","size","link","icon","fill","customClass","classList","setText","setLink","setColor","setFill","setCustomClass","createClass","key","value","setClassList","getColor","getFill","setSize","getSize","getLink","Type","isStringFilled","getTextContainer","textContent","getText","textContainer","Tag","render","taggedTemplateLiteral","updateClassList","getCustomClass","getClassList","container","getContainer","setAttribute","getIconAction","iconNode","addEventListener","typeof","appendChild","UI"],"mappings":"AAAAA,KAAKC,GAAKD,KAAKC,QACd,SAAUC,EAAQC,GAClB,aAKA,IAAIC,EAAa,SAASA,IACxBC,aAAaC,eAAeN,KAAMI,IAGpCC,aAAaE,eAAeH,EAAY,UAAW,oBACnDC,aAAaE,eAAeH,EAAY,SAAU,mBAClDC,aAAaE,eAAeH,EAAY,UAAW,oBACnDC,aAAaE,eAAeH,EAAY,UAAW,oBACnDC,aAAaE,eAAeH,EAAY,UAAW,oBACnDC,aAAaE,eAAeH,EAAY,YAAa,sBACrDC,aAAaE,eAAeH,EAAY,QAAS,kBACjDC,aAAaE,eAAeH,EAAY,gBAAiB,0BACzDC,aAAaE,eAAeH,EAAY,YAAa,sBACrDC,aAAaE,eAAeH,EAAY,aAAc,sBACtDC,aAAaE,eAAeH,EAAY,cAAe,uBACvDC,aAAaE,eAAeH,EAAY,eAAgB,wBAKxD,IAAII,EAAY,SAASA,IACvBH,aAAaC,eAAeN,KAAMQ,IAGpCH,aAAaE,eAAeC,EAAW,KAAM,eAC7CH,aAAaE,eAAeC,EAAW,KAAM,eAC7CH,aAAaE,eAAeC,EAAW,KAAM,eAE7C,IAAIC,EAAiBC,EAAkBC,EAAkBC,EAEzD,IAAIC,EAAqB,WACvB,SAASA,EAAMC,GACbT,aAAaC,eAAeN,KAAMa,GAClCb,KAAKe,KAAOD,EAAQC,KACpBf,KAAKgB,MAAQF,EAAQE,MACrBhB,KAAKiB,KAAOH,EAAQG,KACpBjB,KAAKkB,KAAOJ,EAAQI,KACpBlB,KAAKmB,KAAOL,EAAQK,KACpBnB,KAAKoB,OAASN,EAAQM,KAAO,KAAON,EAAQM,KAC5CpB,KAAKqB,YAAcP,EAAQO,YAC3BrB,KAAKsB,UAAY,WACjBtB,KAAKuB,QAAQvB,KAAKe,MAClBf,KAAKwB,QAAQxB,KAAKkB,MAClBlB,KAAKyB,SAASzB,KAAKgB,OACnBhB,KAAK0B,QAAQ1B,KAAKoB,MAClBpB,KAAK2B,eAAe3B,KAAKqB,aAI3BhB,aAAauB,YAAYf,IACvBgB,IAAK,WACLC,MAAO,SAASL,EAAST,GACvBhB,KAAKgB,MAAQA,EACbhB,KAAK+B,kBAGPF,IAAK,WACLC,MAAO,SAASE,IACd,OAAOhC,KAAKgB,SAKda,IAAK,UACLC,MAAO,SAASJ,EAAQN,GACtBpB,KAAKoB,OAASA,EAAO,KAAO,MAC5BpB,KAAK+B,kBAGPF,IAAK,UACLC,MAAO,SAASG,IACd,OAAOjC,KAAKoB,QAKdS,IAAK,UACLC,MAAO,SAASI,EAAQjB,GACtBjB,KAAKiB,KAAOA,EACZjB,KAAK+B,kBAGPF,IAAK,UACLC,MAAO,SAASK,IACd,OAAOnC,KAAKiB,QAKdY,IAAK,UACLC,MAAO,SAASN,EAAQN,GACtBlB,KAAKkB,KAAOA,KAGdW,IAAK,UACLC,MAAO,SAASM,IACd,OAAOpC,KAAKkB,QAKdW,IAAK,UACLC,MAAO,SAASP,EAAQR,GACtBf,KAAKe,KAAOA,EAEZ,GAAIZ,EAAUkC,KAAKC,eAAevB,GAAO,CACvCf,KAAKuC,mBAAmBC,YAAczB,MAI1Cc,IAAK,UACLC,MAAO,SAASW,IACd,OAAOzC,KAAKe,QAGdc,IAAK,mBACLC,MAAO,SAASS,IACd,IAAKvC,KAAK0C,cAAe,CACvB1C,KAAK0C,cAAgBvC,EAAUwC,IAAIC,OAAOnC,IAAoBA,EAAkBJ,aAAawC,uBAAuB,gCAAmC,aAAc7C,KAAKyC,WAG5K,OAAOzC,KAAK0C,iBAKdb,IAAK,iBACLC,MAAO,SAASH,EAAeN,GAC7BrB,KAAKqB,YAAcA,EACnBrB,KAAK8C,qBAGPjB,IAAK,iBACLC,MAAO,SAASiB,IACd,OAAO/C,KAAKqB,eAKdQ,IAAK,eACLC,MAAO,SAASC,IACd/B,KAAKsB,UAAY,WAEjB,UAAWtB,KAAKgC,YAAc,YAAa,CACzChC,KAAKsB,UAAYtB,KAAKsB,UAAY,IAAMtB,KAAKgB,MAG/C,UAAWhB,KAAKmC,WAAa,YAAa,CACxCnC,KAAKsB,UAAYtB,KAAKsB,UAAY,IAAMtB,KAAKiB,KAG/C,UAAWjB,KAAK+C,kBAAoB,YAAa,CAC/C/C,KAAKsB,UAAYtB,KAAKsB,UAAY,IAAMtB,KAAKqB,YAG/C,GAAIrB,KAAKoB,KAAM,CACbpB,KAAKsB,UAAYtB,KAAKsB,UAAY,iBAGpCtB,KAAK8C,qBAGPjB,IAAK,eACLC,MAAO,SAASkB,IACd,OAAOhD,KAAKsB,aAGdO,IAAK,kBACLC,MAAO,SAASgB,IACd,IAAK9C,KAAKiD,UAAW,CACnBjD,KAAKkD,eAGPlD,KAAKiD,UAAUE,aAAa,QAASnD,KAAKsB,cAG5CO,IAAK,gBACLC,MAAO,SAASsB,IACdpD,KAAKqD,SAAWlD,EAAUwC,IAAIC,OAAOlC,IAAqBA,EAAmBL,aAAawC,uBAAuB,wCAEjH,IAAK,IAAIhB,KAAO7B,KAAKmB,KAAM,CACzBnB,KAAKqD,SAASC,iBAAiBzB,EAAK7B,KAAKmB,KAAKU,IAGhD,OAAO7B,KAAKqD,YAIdxB,IAAK,eACLC,MAAO,SAASoB,IACd,IAAKlD,KAAKiD,UAAW,CACnB,GAAIjD,KAAKoC,UAAW,CAClBpC,KAAKiD,UAAY9C,EAAUwC,IAAIC,OAAOjC,IAAqBA,EAAmBN,aAAawC,uBAAuB,YAAc,YAAe,KAAO,UAAW7C,KAAKkB,KAAMlB,KAAKgD,eAAgBhD,KAAKuC,wBACjM,CACLvC,KAAKiD,UAAY9C,EAAUwC,IAAIC,OAAOhC,IAAqBA,EAAmBP,aAAawC,uBAAuB,eAAiB,KAAO,YAAa7C,KAAKgD,eAAgBhD,KAAKuC,oBAGnL,GAAIlC,aAAakD,OAAOvD,KAAKmB,QAAU,SAAU,CAC/CnB,KAAKiD,UAAUO,YAAYxD,KAAKoD,kBAIpC,OAAOpD,KAAKiD,aAGdpB,IAAK,SACLC,MAAO,SAASc,IACd,OAAO5C,KAAKkD,mBAGhB,OAAOrC,EApLgB,GAuLzBR,aAAaE,eAAeM,EAAO,QAAST,GAC5CC,aAAaE,eAAeM,EAAO,OAAQL,GAE3CN,EAAQW,MAAQA,EAChBX,EAAQE,WAAaA,EACrBF,EAAQM,UAAYA,GAhOrB,CAkOGR,KAAKC,GAAGwD,GAAKzD,KAAKC,GAAGwD,OAAUxD","file":"label.bundle.map.js"}