define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
	  var model = Backbone.Model.extend({
		    defaults: {
		        basePath: '/server.php?event=',
		        dev: false,
                today: new Date(),
		        datepickerFormat: "yyyy/mm/dd",
		        dateTimeOptions: {  year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12:true},
		        dateOptions: {  year: 'numeric', month: 'numeric', day: 'numeric' },
                //Only local storage is saved in the local Storage of the device
                localStorage: {
                    p:'',
                    serverData:{},
                    localData:{},
                    
                },
                lang:{}
		    },
		    getPassword:function(){
		        return this.attributes.localStorage.p;
		    },
            setPassword:function(p){
                this.attributes.localStorage.p = p;
                return this;
            },
		    getServerData:function(id){
		        if(typeof this.attributes.localStorage.serverData == 'undefined')
		            return;
		        if(typeof id  == 'undefined')
		            return this.attributes.localStorage.serverData;
                return this.attributes.localStorage.serverData[id];
            },
            setServerData:function(data){
                this.attributes.localStorage.serverData = data;
                return this;
            },
            getLocalData:function(id){
                if(typeof this.attributes.localStorage.localData == 'undefined')
                    return;
                if(typeof id  == 'undefined')
                    return this.attributes.localStorage.localData;
                return this.attributes.localStorage.localData[id];
            },
		    initialize: function(){
		    	var data = localStorage.getItem('globalModel');
		    	if(data!==null){
		    	    data = JSON.parse(data);
		    		this.attributes.localStorage = data;
		    	}
		    },
		    save: function(){
		    	localStorage.setItem('globalModel', JSON.stringify(this.attributes.localStorage));
		    }
	  });
	  return model;
});
