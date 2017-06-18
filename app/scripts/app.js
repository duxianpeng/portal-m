'use strict';

/**
 * @ngdoc overview
 * @name yuewenWebPortalMApp
 * @description
 * # yuewenWebPortalMApp
 *
 * Main module of the application.
 */
angular
  .module('yuewenWebPortalMApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main");

    $stateProvider.state("main",{
      url:'/main',
      views:{
        "":{
          templateUrl:"views/main/layout.html"
        },
        "header@main":{
          templateUrl:"views/main/header.html"
        },
        "footer@main":{
          templateUrl:"views/main/footer.html"
        },
        "banner@main":{
          templateUrl:"views/main/banner.html"
        },
        "venus-favor@main":{
          templateUrl:"views/main/venus-favor.html"
        },
        "mars-favor@main":{
          templateUrl:"views/main/mars-favor.html"
        },
        "venus-free@main":{
          templateUrl:"views/main/venus-free.html"
        },
        "mars-free@main":{
          templateUrl:"views/main/mars-free.html"
        },
        "venus-full@main":{
          templateUrl:"views/main/venus-full.html"
        },
        "mars-full@main":{
          templateUrl:"views/main/mars-full.html"
        },
        "venus-new@main":{
          templateUrl:"views/main/venus-new.html"
        },
        "mars-new@main":{
          templateUrl:"views/main/mars-new.html"
        }

      }
    });
  });
