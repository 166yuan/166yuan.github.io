var EventUtil = {
	add:function(ele,type,handler){
		 if(ele!==null){
		 	if (window.addEventListener) {
			ele.addEventListener(type,handler,false);
		}else if(window.attachEvent){
			ele.attachEvent('on'+type,handler);
		}else{
			ele['on'+type] = handler;
		}
		}else{
			throw new Error("target element can not be null");
		}
		
	},
	remove:function(ele,type,handler){
		if(window.removeEventListener){
			ele.removeEventListener(type,handler,false);
		}else if(window.detachEvent){
			ele.detachEvent("on"+type,handler);
		}else{
			ele["on"+type] = handler;
		}
	},
	getEvent : function(event){
		return event ? event:window.event;
	},
	getTarget:function(event){
		return event.target || event.srcElement;
	},
	preventDefault:function(event){
		if (event.preventDefault) {
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	},
	on:function ( ){

	}

};