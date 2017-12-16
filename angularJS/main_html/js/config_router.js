'use strict';
var app = angular.module('mainApp',['ngRoute'])
//		 .config(["$routeProvider","$controllerProvider",function($routeProvider,$controllerProvider){
//			$routeProvider
//			.when('/', {
//				templateUrl: '/',
//			})
//			.when('/first',{
//				templateUrl: './first.html',
//			})
//			.otherwise({redirectTo:'/'});
//		}])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
//  var tplPrefix = "tpl/";//模板前缀
    var tplSuffix = ".html";//模板后缀
    var ctrlJsPrefix = "js/controller/";//controllerJs前缀
    $urlRouterProvider.otherwise('/');
    /*menudId在main.js中用到*/
    $stateProvider.state('/', {
        url: '/',
        templateUrl: 'first' + tplSuffix,
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load([ctrlJsPrefix + "filterCtr.js"]);
            }]
        }
    })
}])