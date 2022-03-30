{"version":3,"sources":["conference-create.bundle.js"],"names":["this","BX","exports","main_core","ui_vue","im_lib_logger","im_lib_clipboard","BitrixVue","component","props","data","title","defaultTitle","broadcastMode","linkGenerated","isCreatingConference","conferenceCreated","aliasData","userSelectorLoaded","userSelector","selectedUsers","selectedPresenters","chatId","errors","created","checkRequirements","push","userId","generateLink","mounted","_this","initUserSelector","then","renderTo","$refs","initPresenterSelector","presenterSelector","$nextTick","focus","computed","conferenceLink","localize","defaultTitlePlaceholder","containerClasses","classes","darkTheme","startButtonClasses","length","message","methods","_this2","ajax","runAction","json","analyticsLabel","creationType","response","catch","Logger","warn","copyLink","Reflection","getClass","Clipboard","copy","top","UI","Notification","Center","notify","content","saveConference","_this3","fieldsToSubmit","id","password_needed","users","broadcast_mode","presenters","clearErrors","fields","onFailedSubmit","startConference","openChat","BXIM","openVideoconf","cancelCreation","messenger","extraClose","window","openMessenger","_this4","Runtime","loadExtension","TagSelector","dialogOptions","preselectedItems","undeselectedItems","events","Item:onSelect","ItemOnSelect","event","onUserSelect","Item:onDeselect","ItemOnDeselect","onUserDeselect","entities","options","inviteEmployeeLink","zIndex","addButtonCaption","addButtonCaptionMore","_this5","onPresenterSelect","onPresenterDeselect","PULL","isPublishingEnabled","addError","Call","Util","isCallServerAllowed","errorText","index","findIndex","item","splice","errorMessage","code","template","Messenger","Lib"],"mappings":"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","file":"conference-create.bundle.map.js"}