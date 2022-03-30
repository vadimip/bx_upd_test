{"version":3,"sources":["user-interface-manager.js"],"names":["BX","namespace","Mail","Client","Message","List","UserInterfaceManager","options","this","gridId","mailboxId","userHasCrmActivityPermission","spamDir","outcomeDir","inboxDir","trashDir","PATH_TO_USER_TASKS_TASK","PATH_TO_USER_BLOG_POST","ENTITY_TYPE_NO_BIND","ENTITY_TYPE_CRM_ACTIVITY","ENTITY_TYPE_TASKS_TASK","ENTITY_TYPE_BLOG_POST","settingsMenu","readActionBtnRole","notReadActionBtnRole","spamActionBtnRole","crmActionBtnRole","hideClassName","mailboxMenuToggle","document","querySelector","settingsToggle","mailboxPopupMenuId","isCurrentFolderSpam","isCurrentFolderTrash","isCurrentFolderOutcome","setLastDir","initMailboxes","mailboxMenu","setCurrentFolderFlags","getFilterInstance","addEventHandlers","updateLeftMenuCounter","setDefaultBtnTitles","prototype","mailboxesUnseen","i","length","dataset","unseen","Main","MenuManager","destroy","bind","delegate","onMailboxMenuClick","onSettingsToggleClick","addCustomEvent","onApplyFilter","setDefaultBtnOnShow","getGridInstance","getRows","getSelectedIds","onCustomEvent","window","handleGridSelectItem","event","messageId","row","findParent","tagName","id","getElementsByClassName","updateUnreadCounters","Home","Counters","updateCounters","name","getCurrentFolder","lower","count","onMessagesRead","action","getEventId","Grid","reloadTable","onBindingCreated","trackActionPanelStyleChange","popupWindow","uniquePopupId","indexOf","getPopupContainer","bindElement","parentElement","updateRowMenuSeenBtn","updateRowMenuSpamBtn","updateRowMenuCrmBtn","onCrmBindingDeleted","bindingWrapper","crmBindType","crmBind","parentNode","removeChild","firstChild","lastChild","role","childElementCount","updateGridByUnbindFilter","command","params","bindEntityExists","bindingsNodes","querySelectorAll","type","entityType","bindNode","create","attrs","class","children","href","replace","entityId","text","message","onclick","bindingEntityLink","appendChild","arrangeBindings","taskBind","postBind","firstElementChild","insertBefore","targetNode","gridInstance","gridManager","getById","instance","checkbox","props","disabled","getCountDisplayed","title","style","verticalAlign","setCheckboxNodeForCheckAll","container","display","height","paddingLeft","getCheckAllCheckboxes","list","push","Element","enableCheckAllCheckboxes","setTimeout","bindOnCheckAll","getGridHeaderCheckbox","gridHeaderCheckbox","undefined","showElement","element","force","classList","remove","hideElement","add","notSpamBtn","className","spamBtn","tableRow","gridRow","getActionsMenu","addCrmBtn","excludeCrmBtn","showAddCrmBtn","isAddToCrmActionAvailable","node","crmBindings","notReadBtn","readBtn","actionName","isSelectedRowsHaveClass","selectedIds","changeMessageRead","updateGridByUnseenFilter","filter","getFilterFieldsValues","onPopupMenuFirstShow","contentContainer","close","popup","PopupMenu","events","onPopupFirstShow","isShown","show","closeMailboxMenu","getMenuById","updateMailboxMenuUnseenCounter","updateUnreadMessageMailboxesMarker","totalNumberOfUnreadLetters","unreadMessageMailboxesMarker","updateTotalUnreadCounters","totalNumberOfUnreadMessagesInOtherMailboxes","setTotalUnseenCounter","mailboxCounters","getTotalCounter","top","B24","mail_unseen","BXIM","notify","counters","updateNotifyMailCount","updateMailboxUnseenCounter","seenNumber","columns","j","setAttribute","oldMessage","cells","updateSeenBtn","updateCrmBtn","updateSpamBtn","createEvent","initEvent","dispatchEvent","disActivateBtn","btnRole","activateBtn","activatingBtnRole","toggleButton","buttons","Array","slice","call","forEach","button","showAddToCrm","oldMessagesNumber","panel","items","item","UI","ActionPanel","Item","disable","layout","removeAttribute","isArray","getRowMenu","onUnreadCounterClick","filterApi","getApi","setFields","DIR","IS_SEEN","apply","filterManager","data","filterInstance","promise","presetName","getPreset","getCurrentPresetId","getLastDir","lastDir","dir","getCurrentMailboxId","currentMailbox","currentMailboxId","html","updateMailboxMenuItemUnseenCounter","setMailboxTitleMenuUnseenCounter","path","isCounted","find","match","isVisible","contains"],"mappings":"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","file":"user-interface-manager.map.js"}