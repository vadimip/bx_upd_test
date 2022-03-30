{"version":3,"sources":["body.bundle.js"],"names":["exports","im_view_element_media","im_view_element_attach","im_view_element_keyboard","im_view_element_chatteaser","ui_vue_components_reaction","ui_vue","ui_vue_vuex","im_model","im_const","im_lib_utils","_createForOfIteratorHelper","o","allowArrayLike","it","Symbol","iterator","Array","isArray","_unsupportedIterableToArray","length","i","F","s","n","done","value","e","_e","f","TypeError","normalCompletion","didErr","err","step","next","_e2","return","minLen","_arrayLikeToArray","Object","prototype","toString","call","slice","constructor","name","from","test","arr","len","arr2","BX","window","_ContentType","freeze","default","progress","image","audio","video","richLink","Vue","component","props","userId","dialogId","chatId","messageType","MessageType","self","message","type","MessagesModel","create","getElementState","user","UsersModel","dialog","DialoguesModel","files","enableReactions","showName","showAvatar","referenceContentBodyClassName","referenceContentNameClassName","created","this","dateFormatFunction","cacheFormatDate","methods","clickByUserName","event","$emit","clickByUploadCancel","clickByChatTeaser","clickByKeyboardButton","babelHelpers","objectSpread","setReaction","openReactionList","formatDate","date","id","toJSON","dateFormat","Utils","getFormatType","Messenger","Const","DateFormat","$root","$bitrixMessages","_getDateFormat","format","_this","Main","Date","_getMessage","phrase","isDesktop","platform","isBitrixDesktop","getDesktopVersion","isMobile","isBitrixMobile","computed","ContentType","contentType","filesData","onlyImage","onlyVideo","onlyAudio","inProgress","_iterator","_step","file","localize","getFilteredPhrases","formattedDate","messageText","_this2","isDeleted","IM_MESSENGER_MESSAGE_DELETED","textConverted","replace","whole","userName","$store","getters","text","htmlspecialchars","messageAttach","params","ATTACH","messageReactions","REACTION","isEdited","IS_EDITED","IS_DELETED","chatColor","DialogType","private","color","_this3","FILE_ID","forEach","fileId","commit","data","push","keyboardButtons","result","KEYBOARD","chatTeaser","CHAT_ID","CHAT_LAST_DATE","CHAT_MESSAGE","messageCounter","messageLastDate","languageId","application","common","NAME","firstName","userColor","extranet","Vuex","mapState","state","template","Model","Lib"],"mappings":"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","file":"body.bundle.map.js"}