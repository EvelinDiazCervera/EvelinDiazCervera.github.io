(function() {
'use strict';

angular.module('admin')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('admin', {
      abstract: true,
      templateUrl: 'src/admin/admin.html'
    })
    .state('admin.singup', {
      url: '/singup',
      templateUrl: 'src/admin/singup/singup.html',
      controller: 'SingUpController',
      controllerAs: 'singupCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('admin.myinfo', {
      url: '/myinfo',
      templateUrl: 'src/admin/myinfo/myinfo.html',
      controller: 'MyInfoController',
      controllerAs: 'myInfoCtrl'
      // controller: 'MenuController',
      // controllerAs: 'menuCtrl',
      // resolve: {
      //   menuCategories: ['MenuService', function (MenuService) {
      //     return MenuService.getCategories();
      //   }]
      // }
    });
}
})();
