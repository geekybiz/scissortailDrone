angular.module("macysApp", ["ui.router", "ui.materialize"])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider


    .state('home', {
    url: '/home',
    templateUrl: 'app/views/home/homeTmpl.html'
  })

  .state('about', {
    url: '/about',
    templateUrl: 'app/views/about/aboutTmpl.html'
  })

  .state('services', {
    url: '/services',
    templateUrl: 'app/views/services/servicesTmpl.html'
  })

  .state('contact', {
    url: '/contact',
    templateUrl: 'app/views/contact/contactTmpl.html'
  })

  .state('sitemap', {
    url: '/sitemap',
    templateUrl: 'sitemap.xml'
  })

  $urlRouterProvider.otherwise('/home');
});
