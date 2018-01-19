// lazyload config

	// http://dreamapple.leanapp.cn/gitbook/oclazyload-doc/quick-start/quick-start.html
/**
 * jQuery plugin config use ui-jq directive , config the js and css files that required
 * key: function name of the jQuery plugin
 * value: array of the css js file located
 */
// oclazyload config
var app = angular.module('myApp', ['oc.lazyLoad'])
//	  app.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
//	      $ocLazyLoadProvider.config({
//	        	 debug: true,
//	        	 events: true,
//	        	 modules:[]
//	      });
//	  }]);
	app.config(['$ocLazyLoadProvider',function($ocLazyLoadProvider){
        $ocLazyLoadProvider.config({
            loadedModules: ['myApp'],//主模块名,和ng.bootstrap(document, ['monitorApp'])相同
//          jsLoader: requirejs, //使用requirejs去加载文件
            files: ['modules/summary','modules/appEngine','modules/alarm','modules/database'], //主模块需要的资源，这里主要子模块的声明文件
            debug: true
        });
    }]);