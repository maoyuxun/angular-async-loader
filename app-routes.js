define(function (require) {
	//引入app对象
    var app = require('./app');

    // //定义路由！
   app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    
       $urlRouterProvider.otherwise('/home');

       $stateProvider
           .state('root', {
               templateUrl: 'ngApp/root/template.html',
               controllerUrl:'ngApp/root/rootctrl.js',
               controller:'Rootctrl as rootctrl'
           })
           .state('root.home', {
               url:'/home',
               templateUrl: 'ngApp/home/template.html',
               controllerUrl:'ngApp/home/homectrl.js',
               controller:'Homectrl as homectrl'
           })
           .state('root.music', {
               url:'/music',
               templateUrl: 'ngApp/music/template.html',
               controllerUrl:'ngApp/music/musicctrl.js',
               controller:'Musicctrl as musicctrl'
           })


   }]);
});