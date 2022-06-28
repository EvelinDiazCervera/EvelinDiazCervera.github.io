(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
;

//CONTROLLERS
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tbc = this;
  
  tbc.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  tbc.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
  
  tbc.isEmptytoBuyItems = function () {
    return ShoppingListCheckOffService.isEmptytoBuyItems();
  };
  
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var abc = this;

  abc.boughtItems = ShoppingListCheckOffService.getBoughtItems();

  tbc.isEmptytoBoughtItems = function () {
    return ShoppingListCheckOffService.isEmptytoBoughtItems();
  };
  
}

//SERVICES
function ShoppingListService() {
  // Variables
  var service = this;

  var toBuyItems = [
    {
      name: "Chickens",
      quantity: "2"
    },
    {
      name: "Potatoes",
      quantity: "6"
    },
    {
      name: "Jams",
      quantity: "10"
    },
    {
      name: "Flours",
      quantity: "7"
    },
    {
      name: "Jicamas",
      quantity: "20"
    }
  ];
  var boughtItems = [];

  //principal methods
  service.isEmptytoBuyItems = function () {
    var isEmpty = false;
    if(service.getToBuyItems.length == 0){
      isEmpty= true;
    }
    return isEmpty;
  };

  service.isEmptytoBoughtItems = function () {
    var isEmpty = false;
    if(service.getBoughtItems.length == 0){
      isEmpty= true;
    }
    return isEmpty;
  };

  service.buyItem = function (itemIndex) {
    var aux = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);
    boughtItems.push(aux);
  };

  // Getters and Setters methods
  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
  
}
 

})();