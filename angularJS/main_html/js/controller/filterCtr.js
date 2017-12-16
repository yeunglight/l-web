angular.module("mainApp").controller("filterCtr",function($scope,$http,$rootScope,rmbFilter,chineseFilter,$filter){
	var num = 1;
	alert($filter("rmbFilter")(num));
})