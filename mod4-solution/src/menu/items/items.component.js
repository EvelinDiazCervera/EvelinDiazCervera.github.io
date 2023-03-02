(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('itemsComponent', 
    {
      templateUrl: 'src/menu/items/items.component.template.html',
      bindings: {
          items: '<'
      }
    });
})();