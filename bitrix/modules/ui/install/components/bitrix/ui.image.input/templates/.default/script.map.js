{"version":3,"sources":["script.js"],"names":["exports","main_core","main_core_events","main_loader","_templateObject","data","babelHelpers","taggedTemplateLiteral","instances","Map","ImageInput","createClass","key","value","getById","id","get","params","arguments","length","undefined","classCallCheck","this","defineProperty","handleOnUploaderIsInited","bind","recalculateWrapper","instanceId","containerId","loaderContainerId","settings","disabled","Event","getContainer","event","stopPropagation","preventDefault","addImageHandler","addImage","editImageHandler","editImage","EventEmitter","subscribe","onUploaderIsInitedHandler","set","_this","_event$getCompatData","getCompatData","_event$getCompatData2","slicedToArray","uploader","getPreviews","Dom","addClass","getFileWrapper","requestAnimationFrame","getLoaderContainer","style","display","onFileIsDeletedHandler","onUploadStartHandler","onUploadDoneHandler","onFileCanvasIsLoadedHandler","unsubscribe","recalculateWrapperHandler","unsubscribeEvents","getInputInstance","BX","UI","FileInput","getInstance","getFileInput","agent","fileInput","container","document","getElementById","Type","isDomNode","Error","concat","fileWrapper","querySelector","loaderContainer","getAddButton","addButton","target","detail","inputInstance","items","getItems","hasOwnProperty","frameFlags","active","frameFiles","click","getLoader","loader","Loader","showLoader","setOptions","size","Math","min","offsetHeight","offsetWidth","show","hideLoader","hide","_this2","timeout","clearTimeout","setTimeout","_this3","_event$getCompatData3","_event$getCompatData4","stream","uploading","_this4","_event$getCompatData5","_event$getCompatData6","_this5","isMultipleInput","uploadParams","maxCount","buildShadowElement","wrapper","offsetParent","shadowElement","Tag","render","prepend","canvas","bottomMargin","height","width","closest","querySelectorAll","previews","unbind","unbindAll","removeClass","Reflection","namespace","window"],"mappings":"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","file":"script.map.js"}