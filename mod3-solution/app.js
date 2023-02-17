(function () {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    // .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
    .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com");
    
    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
      var menu = this;

      menu.search='';

      menu.searchByTerm = function (searchTerm) {
        // console.log("search: "+searchTerm);
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    
        promise.then(function (response) {
          menu.errorMessage=null;
          menu.found = response;
          console.log("Response.data: "+ menu.found.length);
        })
        .catch(function (error) {
            // console.log(error);
            menu.found = [];
            menu.errorMessage = error.message;
        })
      };

      menu.removeItem = function (itemIndex) { 
        MenuSearchService.removeItem(itemIndex);
      }
    }
    
    
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
      var service = this;
      var foundItems = [];
      service.getMatchedMenuItems = function (searchTerm){
        var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json"),
        }).then(
          function (result) {
            var objetos = result.data;
            console.log("searchTerm: "+searchTerm);
            if(searchTerm === ""){
              // console.log("entro para arrojar el error");
              throw new Error("Nothing found");
            }
            // console.log("le valio y no retorno");
            // console.log("response: "+itemsMenu[0].description);
            console.log("objetosA: "+objetos['A']);
            // console.log("itemsMenuMenu_items: "+itemsMenu[menu_items]);
            // console.log("length: "+itemsMenu.length);
            // console.log("result: "+result);
            // console.log("searchTerm: "+searchTerm);
            foundItems = []; //Init array

            // for (var i = 0; i < itemsMenu.length; i++) {
            for (var i in objetos) {
              // console.log("DATO: "+itemsMenu[i].description);
              console.log("objetos[i]: "+objetos[i]);
              var otro = objetos[i];
              for(var x in otro){
                console.log("otro[x]: "+otro[x]);
                console.log("otro['category']: "+otro['category']);
                console.log("otro['menu_items']: "+otro['menu_items']);
                var itemsMenu =otro['menu_items'];
                for(var y in itemsMenu){
                  console.log("itemsMenu[y]: "+itemsMenu[y]);
                  var item =itemsMenu[y];
                  if (item['description'].toLowerCase().indexOf(searchTerm) >= 0) {
                    foundItems.push(item);
                  }

                  // for(var z in items){
                  //   // console.log("items[z]: "+items[z]);
                  //   console.log("item['description']: "+item['description']);
                  // }
                  // if (itemsMenu[y].description.toLowerCase().indexOf(searchTerm) >= 0) {
                  //   foundItems.push(itemsMenu[i]);
                  // }
                }  
              }
            }; 
            // console.log("foundItems: "+foundItems[0].description);
            // console.log("foundItems length: "+foundItems.length);
            return foundItems;
          }
        );
        // console.log("response: "+response);
        return response;
      };

      service.removeItem = function (itemIndex) {
        foundItems.splice(itemIndex, 1);
      };
    
    }

    function FoundItemsDirective() {
      var ddo = {
        templateUrl: 'foundItems.html',
        scope: {
          items: '<',
          onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'menu',
        bindToController: true
      };
    
      return ddo;
    }

    function FoundItemsDirectiveController() {
      var menu = this;
    
      
    }


  }
)();
    