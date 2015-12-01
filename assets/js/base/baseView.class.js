define([
  'jquery',
  'underscore',
  'backbone',
  'langModel',
  'globalModel',
  'consoleView'
], function($, _, Backbone, langModel, globalModel, consoleView){
	  var view = Backbone.View.extend({
	    el: "#page",
		basePath: globalModel.get('basePath'),
	    initialize: function(){
	    },
	    render: function(){
	      return this.forceEvents();
	    },
	    /*
	     * This prevents two views rendering in the same elem (ej. page), to register multiple events
	     */
	    forceEvents : function(){
	        this.$el.undelegate();
	        this.delegateEvents();
	        return this;
	    },
	    showMessage:function(message){
	    	$('#message_modal_body').html(message);
	    	$('#message_modal').modal({show:true});
            consoleView.log('showMessage: '+message);
            console.log('showMessage '+message);
	    	setTimeout(function() {
	    		$('#message_modal').modal('hide');
	    	}, 5000);
	    },
		call:function(action, data){
			console.log('call '+action);
	        $('body').addClass('loading');
	        var self = this;
			$.ajax({
		        type: "POST",
		        url: self.basePath+action,
		        data: data,
		        timeout: 1000*60*60*10, /*10 h*/
		        dataType: 'json',
		      }).done(function(response){ 
		          $('body').removeClass('loading');
		          if(!response['success']){
		            if(typeof response['errors'] == "string"){
		              self.showMessage(response['errors']);
		            }else if(typeof response['errors'] == "object" && response['errors']['errors']){
		              self.showMessage(response['errors']['errors']);
		            }
		            self.trigger(action+':error', response);
		            return;
		          }
		          self.trigger(action+':success', response);
		      })
		      .error(function(){
		          $('body').removeClass('loading');
		    	  self.showMessage(langModel.translate('error_connecting'));
		          self.trigger(action+':connectionError');
		      });
			return self;
		}
	  });
	  return view;
});
