// lazyload config

	// http://dreamapple.leanapp.cn/gitbook/oclazyload-doc/quick-start/quick-start.html
/**
 * jQuery plugin config use ui-jq directive , config the js and css files that required
 * key: function name of the jQuery plugin
 * value: array of the css js file located
 */
// oclazyload config
enterpriseApp.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    // We configure ocLazyLoad to use the lib script.js as the async loader
    $ocLazyLoadProvider.config({
    	debug: true, /*当出现错误的时候,$ocLazyLoad返回的promise将会被rejected;
    				     如果你将这个参数设置为true,$ocLazyLoad会将这些错误打印在控制台上*/
    				    
    	events: true, /*当你加载一个模块,一个组件,或者是一个文件(js/css/template)的时候;$ocLazyLoad能够广播一个事件,
    					将这个选项设置为true去激活它.这些事件分别是
    					ocLazyLoad.moduleLoaded, ocLazyLoad.moduleReloaded, ocLazyLoad.componentLoaded, ocLazyLoad.fileLoaded.*/
        modules: [
//          {
//              name: '',
//              files: [
//                  'libs/modules/ng-grid/ng-grid.min.js',
//                  'libs/modules/ng-grid/ng-grid.min.css',
//                  'libs/modules/ng-grid/theme.css'
//              ]
//          },
            
        ]
    });
}]);