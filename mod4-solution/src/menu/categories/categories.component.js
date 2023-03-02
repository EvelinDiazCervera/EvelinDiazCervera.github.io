(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('categoriesComponent', 
    {
      templateUrl: 'src/menu/categories/categories.component.template.html',
      bindings: {
          categories: '<'
      }
    });
})();