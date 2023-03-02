(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);
    
    ItemsController.$inject = ['items']
    function ItemsController(items) {
        var ctrlItems = this;
        ctrlItems.items = items;
        console.log(items);
    }
    
    })();