
if(typeof window.require_add == 'undefined')
	window.require_add = {};

(function(obj){

	var scripts = document.getElementsByTagName("script");
	var path = scripts[scripts.length-1].src;
	var relativePath = path.substring(0, path.lastIndexOf("/js")+1);

	obj.jquery = relativePath + 'js/jquery/jquery.min';
	obj.serializeJson = relativePath + 'js/jquery/jquery.serializejson.min';
	obj.validate = relativePath + 'js/jquery/jquery.validate.min';
	obj.underscore = relativePath + 'js/underscore/underscore-min';
	obj.backbone = relativePath + 'js/backbone/backbone-min';
	obj.less = relativePath + 'js/less/less.min';
	obj.bootstrap = relativePath + 'js/bootstrap/bootstrap.min';
	obj.datepicker = relativePath + 'js/bootstrap/bootstrap-datepicker';
	obj.text = relativePath + 'js/require/text';
    //custom classes
    obj.globalModelClass= relativePath + 'js/base/globalModel.class';
    obj.langModelClass= relativePath + 'js/base/langModel.class';
    obj.prototypes= relativePath + 'js/base/prototypes';
    obj.baseViewClass= relativePath + 'js/base/baseView.class';
    obj.consoleView= relativePath + 'js/base/consoleView';

})(window.require_add);