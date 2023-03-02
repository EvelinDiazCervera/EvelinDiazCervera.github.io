(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        
        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('home');
        
        // *** Set up UI states ***
        $stateProvider
        // Home page
        .state('home', {
            url: '/home',
            templateUrl: 'src/home/home.template.html'
        })
        
        // 
        .state('categories', {
            url: '/categories-list',
            templateUrl: 'src/menu/categories/maincategorieslist.template.html',
            controller: 'MainCategoriesController as ctrlCategories',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        
        .state('items', {
            url: '/items-list/{categoryShortName}',
            templateUrl: 'src/menu/items/items.template.html',
            controller: 'ItemsController as ctrlItems',
            resolve: {
                items: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
                    console.log($stateParams.categoryShortName);
                    return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                }]
            }
        })
    }
    
    })();
    