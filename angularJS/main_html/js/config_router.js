'use strict';
var app = angular.module('mainApp', ['ui.router','oc.lazyLoad']);
app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
    //路由配置
    $stateProvider
        .state('/', {
            url:'/',
            templateUrl:'/',
        })
        .state('/first', {
            url:'/first',
            templateUrl:'./html/first.html',
			controller: "mallCtr",
          	resolve: {
	            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load({
	                	name: 'mainApp',
	                	files:['js/controller/first.js']
		            });
	            }]
	        }
        })
}]);
//依赖注入oc.lazyLoad
//var app = angular.module('mainApp',['ui.router','oc.lazyLoad']);
////配置config
//app.config(function ($stateProvider, $locationProvider,$urlRouterProvider) {
//  $urlRouterProvider.otherwise('/');
//  $stateProvider
//      //懒加载控制器的三种写法（为一个模块的前提下）
//      .state('/',{
//          url : '/',
//          templateUrl:'/',
//      })
//      .state('/first',{
//          url : '/first',
//          templateUrl:'./html/first.html',
//          controller: "mallCtr",
//          resolve : {
//              loadMyCtrl : function ($ocLazyLoad) {
//                  return $ocLazyLoad.load({
//                      name: 'mainApp',
//                      files: ['js/controller/first.js']
//                  })
//              }
//          }
//      })
//});
