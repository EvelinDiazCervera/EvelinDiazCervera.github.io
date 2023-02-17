(function () {
    'use strict';
    
    angular.module('Data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
    
    
    MenuDataService.$inject = ['$http','ApiBasePath']
    function MenuDataService($http,ApiBasePath) {
        var service = this;
        var foundCategories = [];
        service.getAllCategories = function () {
            var response = $http({
            method: "GET",
            url: (ApiBasePath + "/categories.json")
        }).then(
            function (result) {
                var foundCategories = result.data;
                if(!(foundCategories.length>0)){
                    throw new Error("Nothing found");
                }
                return foundCategories;
            }
        );
        
        return response;
        }
        
        function getItemsForCategory(categoryShortName) {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
                params: {
                    category: categoryShortName
                }
            });
        
            return response;
        }
    

    }
    
})();