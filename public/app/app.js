var app = angular.module("macysApp", ["ngRoute", "ui.materialize"])

.config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $locationProvider.hashPrefix('!');

    $routeProvider.when('/', {
    templateUrl: 'app/views/home/homeTmpl.html',
    controller: 'homeController'
  })

  $routeProvider.when('/about', {
    templateUrl: 'app/views/about/aboutTmpl.html',
    controller: 'aboutController'
  })

  $routeProvider.when('/services', {
    templateUrl: 'app/views/services/servicesTmpl.html',
    controller: 'servicesController'
  })

  $routeProvider.when('/contact', {
    templateUrl: 'app/views/contact/contactTmpl.html',
    controller: 'contactController'
  })

  // $routeProvider.when('/sitemap', {
  //   templateUrl: 'sitemap.xml'
  // })

  $routeProvider.otherwise({
    redirectTo: '/'
  });

})

.controller('mainController', function ($scope) {
  $scope.seo = {
    pageTitle: '',
    pageDescription: ''
  };
})

.controller('homeController', function ($scope) {
  $scope.$parent.seo = {
    pageTitle: 'Your one stop glass shop',
    pageDescription: 'Your one stop shop for shower doors, custom mirrors, commercial glass, auto glass, flat glass, safety glass.'
  };
})

.controller('servicesController', function ($scope) {
  $scope.$parent.seo = {
    pageTitle: 'Services',
    pageDescription: 'Check out our comprehensive list of services that fulfill all of your glass needs.'
  };
})

.controller('aboutController', function ($scope) {
  $scope.$parent.seo = {
    pageTitle: 'About',
    pageDescription: 'We have been in business for over 30 years, and we have the experience to serve you.'
  };
})

.controller('contactController', function ($scope) {
  $scope.$parent.seo = {
    pageTitle: 'Contact',
    pageDescription: 'We look forward to serving you.'
  };
})
