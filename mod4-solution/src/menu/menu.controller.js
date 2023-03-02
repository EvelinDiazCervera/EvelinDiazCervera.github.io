(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('MenuController', MenuController)

    MenuController.$inject = ['MenuDataService'];
    function MenuController(MenuDataService) {
        var ctrl = this;
    
        
    //   // Use factory to create new shopping list service
    //     var shoppingList = ShoppingListFactory();
    
    //     list.items = shoppingList.getItems();
    //     var origTitle = "Shopping List #1";
    //     list.title = origTitle + " (" + list.items.length + " items )";
    
    //     list.itemName = "";
    //     list.itemQuantity = "";
    
    //     list.addItem = function () {
    //         shoppingList.addItem(list.itemName, list.itemQuantity);
    //         list.title = origTitle + " (" + list.items.length + " items )";
    //     };
    
    //     list.removeItem = function (itemIndex) {
    //         shoppingList.removeItem(itemIndex);
    //         list.title = origTitle + " (" + list.items.length + " items )";
    //     };
    }
    
    
    
    })();