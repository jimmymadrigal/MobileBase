define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
	  var view = Backbone.View.extend({
	    el: "#console",
	    initialize: function(){
	    },
	    render: function(){
	      return this;
	    },
	    log: function(message){
			console.log('console:'+message);
			this.$el.append($('<p>').html(message));
	    }
	  });
	  return new view;
});
