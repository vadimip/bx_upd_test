{"version":3,"sources":["notification.js"],"names":["BX","namespace","Call","Notification","Events","onButtonClick","config","this","popup","window","callerAvatar","type","isNotEmptyString","callerName","callerType","callerColor","video","hasCamera","callbacks","onClose","isFunction","DoNothing","onDestroy","_onContentButtonClickHandler","_onContentButtonClick","bind","desktop","addCustomEvent","prototype","show","params","BXDesktopWindow","ExecuteCommand","BXDesktopSystem","getHtmlPage","JSON","stringify","content","NotificationContent","createPopup","render","PopupWindow","closeIcon","noAllPaddings","zIndex","MessengerCommon","getDefaultZIndex","offsetLeft","offsetTop","closeByEsc","draggable","restrict","overlay","backgroundColor","opacity","events","onPopupClose","onPopupDestroy","close","destroy","removeCustomEvents","e","elements","root","avatar","backgroundImage","callerPrefix","message","create","props","className","children","style","src","text","util","htmlspecialcharsback","click","_onAnswerWithVideoButtonClick","_onAnswerButtonClick","_onDeclineButtonClick","showInDesktop","document","body","appendChild","setWindowPosition","X","STP_CENTER","Y","STP_VCENTER","Width","Height","onCustomEvent","button"],"mappings":"CAAC,WAEAA,GAAGC,UAAU,WAEb,GAAGD,GAAGE,KAAKC,aACX,CACC,OAGD,IAAIC,GACHC,cAAe,mCAehBL,GAAGE,KAAKC,aAAe,SAASG,GAE/BC,KAAKC,MAAQ,KACbD,KAAKE,OAAS,KAEdF,KAAKG,aAAeV,GAAGW,KAAKC,iBAAiBN,EAAOI,cAAgBJ,EAAOI,aAAe,GAC1F,GAAGH,KAAKG,cAAgB,iCACxB,CACCH,KAAKG,aAAe,GAGrBH,KAAKM,WAAaP,EAAOO,WACzBN,KAAKO,WAAaR,EAAOQ,WACzBP,KAAKQ,YAAcT,EAAOS,YAC1BR,KAAKS,MAAQV,EAAOU,MACpBT,KAAKU,UAAYX,EAAOW,WAAa,KAErCV,KAAKW,WACJC,QAASnB,GAAGW,KAAKS,WAAWd,EAAOa,SAAWb,EAAOa,QAAUnB,GAAGqB,UAClEC,UAAWtB,GAAGW,KAAKS,WAAWd,EAAOgB,WAAahB,EAAOgB,UAAYtB,GAAGqB,UACxEhB,cAAeL,GAAGW,KAAKS,WAAWd,EAAOD,eAAiBC,EAAOD,cAAgBL,GAAGqB,WAGrFd,KAAKgB,6BAA+BhB,KAAKiB,sBAAsBC,KAAKlB,MACpE,GAAGP,GAAG0B,QACN,CACC1B,GAAG0B,QAAQC,eAAevB,EAAOC,cAAeE,KAAKgB,gCAIvDvB,GAAGE,KAAKC,aAAayB,UAAUC,KAAO,WAErC,GAAI7B,GAAG0B,QACP,CACC,IAAII,GACHd,MAAOT,KAAKS,MACZC,UAAWV,KAAKU,UAChBP,aAAcH,KAAKG,aACnBG,WAAYN,KAAKM,WACjBC,WAAYP,KAAKO,WACjBC,YAAaR,KAAKQ,aAGnB,GAAGR,KAAKE,OACR,CACCF,KAAKE,OAAOsB,gBAAgBC,eAAe,YAG5C,CACCzB,KAAKE,OAASwB,gBAAgBD,eAC7B,oBACAhC,GAAG0B,QAAQQ,YAAY,GAAI,6DAA+DC,KAAKC,UAAUN,GAAU,qDAKtH,CACCvB,KAAK8B,QAAU,IAAIrC,GAAGE,KAAKoC,qBAC1BtB,MAAOT,KAAKS,MACZC,UAAWV,KAAKU,UAChBP,aAAcH,KAAKG,aACnBG,WAAYN,KAAKM,WACjBC,WAAYP,KAAKO,WACjBC,YAAaR,KAAKQ,YAClBI,QAASZ,KAAKW,UAAUC,QACxBG,UAAWf,KAAKW,UAAUI,UAC1BjB,cAAeE,KAAKW,UAAUb,gBAE/BE,KAAKgC,YAAYhC,KAAK8B,QAAQG,UAC9BjC,KAAKC,MAAMqB,SAIb7B,GAAGE,KAAKC,aAAayB,UAAUW,YAAc,SAASF,GAErD9B,KAAKC,MAAQ,IAAIR,GAAGyC,YAAY,2BAA4B,MAC3DJ,QAASA,EACTK,UAAW,MACXC,cAAe,KACfC,OAAQ5C,GAAG6C,gBAAgBC,mBAAqB,IAChDC,WAAY,EACZC,UAAW,EACXC,WAAY,MACZC,WAAYC,SAAU,OACtBC,SAAUC,gBAAiB,QAASC,QAAS,IAC7CC,QACCC,aAAc,WAEbjD,KAAKW,UAAUC,WACdM,KAAKlB,MACPkD,eAAgB,WAEflD,KAAKC,MAAQ,MACZiB,KAAKlB,UAKVP,GAAGE,KAAKC,aAAayB,UAAU8B,MAAQ,WAEtC,GAAGnD,KAAKC,MACR,CACCD,KAAKC,MAAMkD,QAEZ,GAAGnD,KAAKE,OACR,CACCF,KAAKE,OAAOsB,gBAAgBC,eAAe,QAE5CzB,KAAKW,UAAUC,WAGhBnB,GAAGE,KAAKC,aAAayB,UAAU+B,QAAU,WAExC,GAAGpD,KAAKC,MACR,CACCD,KAAKC,MAAMmD,UACXpD,KAAKC,MAAQ,KAEd,GAAGD,KAAKE,OACR,CACCF,KAAKE,OAAOsB,gBAAgBC,eAAe,SAC3CzB,KAAKE,OAAS,KAGf,GAAGT,GAAG0B,QACN,CACC1B,GAAG0B,QAAQkC,mBAAmBxD,EAAOC,eAEtCE,KAAKW,UAAUI,aAGhBtB,GAAGE,KAAKC,aAAayB,UAAUJ,sBAAwB,SAASqC,GAE/DtD,KAAKW,UAAUb,cAAcwD,IAG9B7D,GAAGE,KAAKoC,oBAAsB,SAAShC,GAEtCC,KAAKS,MAAQV,EAAOU,MACpBT,KAAKU,UAAYX,EAAOW,UACxBV,KAAKG,aAAeJ,EAAOI,aAC3BH,KAAKM,WAAaP,EAAOO,WACzBN,KAAKO,WAAaR,EAAOQ,WACzBP,KAAKQ,YAAcT,EAAOS,YAE1BR,KAAKuD,UACJC,KAAM,KACNC,OAAQ,MAGTzD,KAAKW,WACJC,QAASnB,GAAGW,KAAKS,WAAWd,EAAOa,SAAWb,EAAOa,QAAUnB,GAAGqB,UAClEC,UAAWtB,GAAGW,KAAKS,WAAWd,EAAOgB,WAAahB,EAAOgB,UAAYtB,GAAGqB,UACxEhB,cAAeL,GAAGW,KAAKS,WAAWd,EAAOD,eAAiBC,EAAOD,cAAgBL,GAAGqB,YAItFrB,GAAGE,KAAKoC,oBAAoBV,UAAUY,OAAS,WAE9C,IAAIyB,EAAkB1D,KAAKG,cAAgB,mDAC3C,IAAIsD,EACJ,IAAIE,EAEJ,GAAI3D,KAAKS,MACT,CACC,GAAIT,KAAKO,aAAe,OACxB,CACCoD,EAAelE,GAAGmE,QAAQ,kCAEtB,GAAI5D,KAAKO,aAAe,UAC7B,CACCoD,EAAelE,GAAGmE,QAAQ,6BAI5B,CACC,GAAI5D,KAAKO,aAAe,OACxB,CACCoD,EAAelE,GAAGmE,QAAQ,4BAEtB,GAAI5D,KAAKO,aAAe,UAC7B,CACCoD,EAAelE,GAAGmE,QAAQ,mBAI5B,GAAI5D,KAAKG,aACT,CACCsD,EAASzD,KAAKG,iBAGf,CACC,GAAIH,KAAKO,aAAe,OACxB,CACCkD,EAAS,wDAEL,GAAIzD,KAAKO,aAAe,UAC7B,CACCkD,EAAS,4CAIXzD,KAAKuD,SAASC,KAAO/D,GAAGoE,OAAO,OAC9BC,OAAQC,UAAW,4BACnBC,UACCvE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,uCACnBE,OACCP,gBAAiB,OAASA,EAAkB,OAG9CjE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,8CAEpBtE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,gDACnBE,OACCP,gBAAiB,8DAGnBjE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,gDAEpBtE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,iCACnBC,UACCvE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,gCACnBC,UACCvE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,kCACnBC,UACCvE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,uCACnBC,UACCvE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,wCACnBC,UACChE,KAAKuD,SAASE,OAAShE,GAAGoE,OAAO,OAChCC,OACCC,UAAW,6CACXG,IAAKT,GAENQ,OACCnB,gBAAiB9C,KAAKQ,wBAS9Bf,GAAGoE,OAAO,OACTC,OAAQC,UAAW,kCACnBC,UACCvE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,wCACnBC,UACCvE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,iDACnBI,KAAMR,IAEPlE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,0CACnBI,KAAM1E,GAAG2E,KAAKC,qBAAqBrE,KAAKM,uBAQ/Cb,GAAGoE,OAAO,OACTC,OAAQC,UAAW,mCACnBC,UACCvE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,oCACnBC,UACCvE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,0CACnBC,UACCvE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,oCAAsC/D,KAAKU,UAAY,4CAA8C,KACxHsD,UACCvE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,sFAEpBtE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,wCACnBI,KAAM1E,GAAGmE,QAAQ,iCAGnBZ,QAASsB,MAAOtE,KAAKuE,8BAA8BrD,KAAKlB,SAEzDP,GAAGoE,OAAO,OACTC,OAAQC,UAAW,mCACnBC,UACCvE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,wFAEpBtE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,wCACnBI,KAAM1E,GAAGmE,QAAQ,2BAGnBZ,QAASsB,MAAOtE,KAAKwE,qBAAqBtD,KAAKlB,SAEhDP,GAAGoE,OAAO,OACTC,OAAQC,UAAW,0EACnBC,UACCvE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,0FAEpBtE,GAAGoE,OAAO,OACTC,OAAQC,UAAW,wCACnBI,KAAM1E,GAAGmE,QAAQ,4BAGnBZ,QAASsB,MAAOtE,KAAKyE,sBAAsBvD,KAAKlB,wBAa3D,OAAOA,KAAKuD,SAASC,MAGtB/D,GAAGE,KAAKoC,oBAAoBV,UAAUqD,cAAgB,WAErD1E,KAAKiC,SACL0C,SAASC,KAAKC,YAAY7E,KAAKuD,SAASC,MACxC/D,GAAG0B,QAAQ2D,mBAAmBC,EAAEC,WAAYC,EAAEC,YAAaC,MAAO,IAAKC,OAAQ,OAGhF3F,GAAGE,KAAKoC,oBAAoBV,UAAUmD,qBAAuB,SAASlB,GAErE,GAAG7D,GAAG0B,QACN,CACC1B,GAAG0B,QAAQkE,cAAc,OAAQxF,EAAOC,gBACvCwF,OAAQ,SACR7E,MAAO,aAIT,CACCT,KAAKW,UAAUb,eACdwF,OAAQ,SACR7E,MAAO,UAKVhB,GAAGE,KAAKoC,oBAAoBV,UAAUkD,8BAAgC,SAASjB,GAE9E,IAAItD,KAAKU,UACT,CACC,OAED,GAAGjB,GAAG0B,QACN,CACC1B,GAAG0B,QAAQkE,cAAc,OAAQxF,EAAOC,gBACvCwF,OAAQ,SACR7E,MAAO,YAIT,CACCT,KAAKW,UAAUb,eACdwF,OAAQ,SACR7E,MAAO,SAKVhB,GAAGE,KAAKoC,oBAAoBV,UAAUoD,sBAAwB,SAASnB,GAEtE,GAAG7D,GAAG0B,QACN,CACC1B,GAAG0B,QAAQkE,cAAc,OAAQxF,EAAOC,gBACvCwF,OAAQ,iBAIV,CACCtF,KAAKW,UAAUb,eACdwF,OAAQ,eAlaX","file":"notification.map.js"}