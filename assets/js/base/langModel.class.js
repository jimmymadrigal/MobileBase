define([
  'jquery',
  'underscore',
  'backbone',
  'globalModel',
], function($, _, Backbone, globalModel){
	  var model = Backbone.Model.extend({
		    defaults: {
		        /* SAMPLE
		        custom_message:{
		            en:'English custom message',
		            es:'Mensaje customizado en español!',
		        } 
		        */
		    },
            translate:function(id){
                var lang = 'en'
                var user = globalModel.getServerData('user');
                if(typeof user != 'undefined' && typeof user.lang != 'undefined')
                    lang = user.lang;
                return this.attributes[id][lang];
            }
	  });
	  return model;
});
