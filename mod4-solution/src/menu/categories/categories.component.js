(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('categoriesComponent', {
      templateUrl: 'categories.component.template.html',
      bindings: {
          categories: '<'
      }
    });
})();