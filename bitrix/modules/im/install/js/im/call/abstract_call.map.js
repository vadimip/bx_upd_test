{"version":3,"sources":["abstract_call.js"],"names":["BX","namespace","Call","AbstractCall","params","self","this","id","instanceId","parentId","direction","type","prop","getInteger","Type","Instant","ready","userId","Engine","getInstance","getCurrentUserId","initiatorId","users","isArray","filter","associatedEntity","isPlainObject","startDate","Date","getString","videoEnabled","videoHd","cameraId","microphoneId","muted","logToken","CallEngine","getLogService","logger","Logger","localStreams","main","screen","eventListeners","events","initEventListeners","Object","defineProperty","get","PlainCall","Provider","Plain","VoximplantCall","prototype","eventName","addEventListener","listener","isFunction","push","removeEventListener","indexOf","listenerIndex","splice","runCallback","eventFields","length","call","i","err","console","error","log","getLocalStream","tag","setLocalStream","mediaStream","isVideoEnabled","isAnyoneParticipating","Error","__onPullEvent","command","inviteUsers","cancel","answer","decline","code","reason","hangup","text","Util","getLogMessage","apply","arguments","desktop","message","substr","debugFlag","a","getTimeForLog","concat","Array","slice","MessengerDebug","addLog","destroy","Event","onDestroy"],"mappings":"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","file":"abstract_call.map.js"}