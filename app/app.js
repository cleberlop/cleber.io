var app = angular.module('cleberIo', ['ui.router', 'angularMoment']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      templateUrl: './components/home/home.html',
      controller: 'homeCtrl',
      controllerAs: 'hc',
      url: '/home',
    });

  $urlRouterProvider.otherwise('/home');

});
