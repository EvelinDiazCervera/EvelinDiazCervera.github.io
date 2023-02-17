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
      menu.found == [];

      menu.searchByTerm = function (searchTerm) {
        // console.log("search: "+searchTerm);
        menu.found == [];
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    
        promise.then(function (result) {
          menu.errorMessage=null;
          menu.found = result;
          console.log("result.data: "+ menu.found.length);
          console.log("result: ");
          console.log(result);
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
      // var foundItems = [];
      service.getMatchedMenuItems = function (searchTerm){
        var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json"),
        });
        
        return response.then(
          function (result) {
            console.log(result);
            var foundItems = [];
            var data = result.data;
            for (var category in data) {
                // console.log(data[category]);
                foundItems.push(
                    data[category].menu_items.filter(
                        item => item.description.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                );
            }
            console.log("foundItems: ");
            console.log(foundItems);
            console.log("foundItems.flat(): ");
            console.log(foundItems.flat());
            return foundItems.flat();
            // var objetos = result.data;
            // console.log("searchTerm: "+searchTerm);
            // if(searchTerm === ""){
            //   throw new Error("Nothing found");
            // }
            // console.log("objetosA: "+objetos['A']);
            // foundItems = []; //Init array
            // for (var i in objetos) {
            //   console.log("objetos[i]: "+objetos[i]);
            //   var otro = objetos[i];
            //   for(var x in otro){
            //     console.log("otro[x]: "+otro[x]);
            //     console.log("otro['category']: "+otro['category']);
            //     console.log("otro['menu_items']: "+otro['menu_items']);
            //     var itemsMenu =otro['menu_items'];
            //     for(var y in itemsMenu){
            //       console.log("itemsMenu[y]: "+itemsMenu[y]);
            //       var item =itemsMenu[y];
            //       if (item['description'].toLowerCase().indexOf(searchTerm) >= 0) {
            //         foundItems.push(item);
            //       }
            //     }  
            //   }
            // }; 
            // return foundItems;
          }
        );
        // return response;
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
        }
        // ,
        // controller: FoundItemsDirectiveController,
        // controllerAs: 'menu',
        // bindToController: true
      };
    
      return ddo;
    }

    // function FoundItemsDirectiveController() {
    //   var menu = this;
    
      
    // }


  }
)();
    