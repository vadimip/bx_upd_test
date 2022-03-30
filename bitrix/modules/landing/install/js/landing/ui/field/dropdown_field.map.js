{"version":3,"sources":["dropdown_field.js"],"names":["BX","namespace","setTextContent","Landing","Utils","escapeText","data","offsetTop","offsetLeft","bind","unbind","UI","Field","Dropdown","options","this","items","BaseField","apply","arguments","setEventNamespace","subscribeFromOptions","Component","fetchEventsFromOptions","onChangeHandler","onChange","layout","classList","add","popup","input","addEventListener","onInputClick","document","onDocumentClick","rootWindow","PageObject","getRootWindow","type","isPlainObject","keys","Object","map","key","name","value","content","setValue","onMouseWheel","prototype","constructor","__proto__","event","stopPropagation","popupRoot","contains","popupWindow","popupContainer","PopupMenuWindow","id","Date","bindElement","item","text","html","onclick","onItemClick","events","onPopupClose","remove","parentElement","appendChild","style","position","isShown","close","show","menuContainer","maxHeight","contentContainer","overflowX","onMouseOver","onMouseLeave","rect","getBoundingClientRect","left","top","height","width","postfix","property","onValueChangeHandler","fireEvent","emit","getValue","dataset","forEach","isChanged","mouseEvent","window","preventDefault","delta","Panel","Content","getDeltaFromEvent","scrollTop","requestAnimationFrame","y"],"mappings":"CAAC,WACA,aAEAA,GAAGC,UAAU,uBAEb,IAAIC,EAAiBF,GAAGG,QAAQC,MAAMF,eAEtC,IAAIG,EAAaL,GAAGG,QAAQC,MAAMC,WAClC,IAAIC,EAAON,GAAGG,QAAQC,MAAME,KAC5B,IAAIC,EAAYP,GAAGG,QAAQC,MAAMG,UACjC,IAAIC,EAAaR,GAAGG,QAAQC,MAAMI,WAClC,IAAIC,EAAOT,GAAGG,QAAQC,MAAMK,KAC5B,IAAIC,EAASV,GAAGG,QAAQC,MAAMM,OAS9BV,GAAGG,QAAQQ,GAAGC,MAAMC,SAAW,SAASC,GAEvCC,KAAKC,MAAQ,UAAWF,GAAWA,EAAQE,MAAQF,EAAQE,SAC3DhB,GAAGG,QAAQQ,GAAGC,MAAMK,UAAUC,MAAMH,KAAMI,WAC1CJ,KAAKK,kBAAkB,gCACvBL,KAAKM,qBAAqBrB,GAAGG,QAAQQ,GAAGW,UAAUC,uBAAuBT,IACzEC,KAAKS,uBAAyBV,EAAQW,WAAa,WAAaX,EAAQW,SAAW,aACnFV,KAAKW,OAAOC,UAAUC,IAAI,6BAC1Bb,KAAKc,MAAQ,KACbd,KAAKe,MAAMC,iBAAiB,QAAShB,KAAKiB,aAAavB,KAAKM,OAC5DkB,SAASF,iBAAiB,QAAShB,KAAKmB,gBAAgBzB,KAAKM,OAC7D,IAAIoB,EAAanC,GAAGG,QAAQiC,WAAWC,gBACvCF,EAAWF,SAASF,iBAAiB,QAAShB,KAAKmB,gBAAgBzB,KAAKM,OAExE,GAAIf,GAAGsC,KAAKC,cAAcxB,KAAKC,OAC/B,CACC,IAAIwB,EAAOC,OAAOD,KAAKzB,KAAKC,OAC5BD,KAAKC,MAAQwB,EAAKE,IAAI,SAASC,GAC9B,OAAQC,KAAM7B,KAAKC,MAAM2B,GAAME,MAAOF,IACpC5B,MAGJb,EAAea,KAAKe,MAAOf,KAAKC,MAAM,GAAG4B,MACzCtC,EAAKS,KAAKe,MAAO,QAASf,KAAKC,MAAM,GAAG6B,OAExC,GAAI9B,KAAK+B,UAAY,GACrB,CACC/B,KAAKgC,SAAShC,KAAK+B,SACnB/B,KAAKiC,aAAejC,KAAKiC,aAAavC,KAAKM,QAI7Cf,GAAGG,QAAQQ,GAAGC,MAAMC,SAASoC,WAC5BC,YAAalD,GAAGG,QAAQQ,GAAGC,MAAMC,SACjCsC,UAAWnD,GAAGG,QAAQQ,GAAGC,MAAMK,UAAUgC,UAEzCjB,aAAc,SAASoB,GAEtBA,EAAMC,kBACN,IAAKtC,KAAKc,OAAUd,KAAKuC,YAAcvC,KAAKuC,UAAUC,SAASxC,KAAKc,MAAM2B,YAAYC,gBACtF,CACC1C,KAAKc,MAAQ,IAAI7B,GAAG0D,iBACnBC,GAAI,cAAgB,IAAIC,KACxBC,YAAa9C,KAAKe,MAClBd,MAAOD,KAAKC,MAAM0B,IAAI,SAASoB,GAC9B,OACCC,KAAMD,EAAKE,KAAOF,EAAKE,KAAO3D,EAAWyD,EAAKlB,MAC9CqB,QAAS,WACRlD,KAAKmD,YAAYJ,IAChBrD,KAAKM,QAENA,MACHoD,QACCC,aAAc,WACbrD,KAAKe,MAAMH,UAAU0C,OAAO,qBAC5BtD,KAAKW,OAAOC,UAAU0C,OAAO,sBAC5B5D,KAAKM,SAITA,KAAKuC,UAAYvC,KAAKW,OAAO4C,cAAcA,cAAcA,cACzDvD,KAAKuC,UAAUiB,YAAYxD,KAAKc,MAAM2B,YAAYC,gBAClD1C,KAAKuC,UAAUkB,MAAMC,SAAW,WAGjC1D,KAAKW,OAAOC,UAAUC,IAAI,qBAC1Bb,KAAKe,MAAMH,UAAUC,IAAI,qBAEzB,GAAIb,KAAKc,MAAM2B,YAAYkB,UAC3B,CACC3D,KAAKc,MAAM8C,YAGZ,CACC5D,KAAKc,MAAM+C,OAGZ7D,KAAKc,MAAMH,OAAOmD,cAAcL,MAAMM,UAAY,0BAClD/D,KAAKc,MAAM2B,YAAYuB,iBAAiBP,MAAMQ,UAAY,SAE1DvE,EAAKM,KAAKc,MAAM2B,YAAYC,eAAgB,YAAa1C,KAAKkE,YAAYxE,KAAKM,OAC/EN,EAAKM,KAAKc,MAAM2B,YAAYC,eAAgB,aAAc1C,KAAKmE,aAAazE,KAAKM,OAEjF,IAAIoE,EAAOpE,KAAKe,MAAMsD,wBACtB,IAAIC,EAAO7E,EAAWO,KAAKe,MAAOf,KAAKuC,WACvC,IAAIgC,EAAM/E,EAAUQ,KAAKe,MAAOf,KAAKuC,WACrCvC,KAAKc,MAAM2B,YAAYC,eAAee,MAAMc,IAAMA,EAAMH,EAAKI,OAAS,KACtExE,KAAKc,MAAM2B,YAAYC,eAAee,MAAMa,KAAOA,EAAO,KAC1DtE,KAAKc,MAAM2B,YAAYC,eAAee,MAAMgB,MAAQL,EAAKK,MAAQ,MAIlEtB,YAAa,SAASJ,GAErB5D,EAAea,KAAKe,MAAOgC,EAAKlB,MAChCtC,EAAKS,KAAKe,MAAO,QAASgC,EAAKjB,OAC/B9B,KAAKc,MAAM8C,QACX5D,KAAKS,gBAAgBsC,EAAKjB,MAAO9B,KAAKC,MAAOD,KAAK0E,QAAS1E,KAAK2E,UAChE3E,KAAK4E,qBAAqB5E,MAC1Bf,GAAG4F,UAAU7E,KAAKe,MAAO,SACzBf,KAAK8E,KAAK,aAMXC,SAAU,WAET,IAAIjD,EAAQ9B,KAAKe,MAAMiE,QAAQlD,MAE/B,GAAIA,IAAU,oBAAsBA,IAAU,YAC9C,CACC,OAAOA,EAGR,OAAO9B,KAAKC,MAAM,GAAG6B,OAGtBE,SAAU,SAASF,GAElB9B,KAAKC,MAAMgF,QAAQ,SAASlC,GAE3B,GAAIjB,GAASiB,EAAKjB,MAClB,CACC3C,EAAea,KAAKe,MAAOgC,EAAKlB,MAChCtC,EAAKS,KAAKe,MAAO,QAASgC,EAAKjB,SAE9B9B,OAQJkF,UAAW,WAGV,OAAOlF,KAAK+B,SAAW/B,KAAK+E,YAG7B5D,gBAAiB,WAEhB,GAAInB,KAAKc,MACT,CACCd,KAAKc,MAAM8C,UAObM,YAAa,WAEZ,IAAIiB,EAAa,YAAaC,OAAS,QAAU,aACjD1F,EAAKM,KAAKc,MAAM2B,YAAYC,eAAgByC,EAAYnF,KAAKiC,cAC7DvC,EAAKM,KAAKc,MAAM2B,YAAYC,eAAgB,YAAa1C,KAAKiC,eAO/DkC,aAAc,WAEb,IAAIgB,EAAa,YAAaC,OAAS,QAAU,aACjDzF,EAAOK,KAAKc,MAAM2B,YAAYC,eAAgByC,EAAYnF,KAAKiC,cAC/DtC,EAAOK,KAAKc,MAAM2B,YAAYC,eAAgB,YAAa1C,KAAKiC,eAQjEA,aAAc,SAASI,GAEtBA,EAAMC,kBACND,EAAMgD,iBAEN,GAAIrF,KAAKc,MACT,CACC,IAAIwE,EAAQrG,GAAGG,QAAQQ,GAAG2F,MAAMC,QAAQC,kBAAkBpD,GAC1D,IAAIqD,EAAY1F,KAAKc,MAAM2B,YAAYuB,iBAAiB0B,UAExDC,sBAAsB,WACrB3F,KAAKc,MAAM2B,YAAYuB,iBAAiB0B,UAAYA,EAAYJ,EAAMM,GACrElG,KAAKM,WAhNV","file":"dropdown_field.map.js"}