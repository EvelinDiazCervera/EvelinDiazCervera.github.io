(function () {
    'use strict';
    
    angular.module('Data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com");
    
    
    MenuDataService.$inject = ['$http','ApiBasePath']
    function MenuDataService($http,ApiBasePath) {
        var service = this;
        var foundCategories = [];
        var foundItems = [];

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
        
        service.getItemsForCategory = function (categoryShortName) {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items/"+categoryShortName+".json "),
            }).then(
                function (result) {
                    console.log(result);
                    var foundItems = result.data;
                    if(foundItems == null){
                        throw new Error("Nothing found");
                    }
                    return foundItems;
                }
            );
        
            return response;
        }
    

    }
    
})();