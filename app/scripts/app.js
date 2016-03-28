'use strict';

/**
 * @ngdoc overview
 * @name krishnaStaysApp
 * @description
 * # krishnaStaysApp
 *
 * Main module of the application.
 */
angular
  .module('krishnaStaysApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
        .when('/services', {
          templateUrl: 'views/services.html',
          controller: 'ServicesCtrl',
          controllerAs: 'services'
        })
        .when('/gallery', {
          templateUrl: 'views/gallery.html',
          controller: 'GalleryCtrl',
          controllerAs: 'gallery'
        })
        .when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl',
          controllerAs: 'contact'
        })
        .otherwise({
            redirectTo: '/'
        });

      // use the HTML5 History API
      $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
      });
  });
