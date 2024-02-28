(function () {
    'use strict';

    angular.module('public')
    .service('MenuItemService', MenuItemService)
    .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com");

    MenuItemService.$inject = ['$http', 'ApiBasePath'];
    function MenuItemService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function (cat,numb){
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items/"+cat+"/menu_items/"+numb+".json"),
            });

            return response.then(
                function (result) {
                // var data = result.data;
                // if(data === null){
                //     throw new Error("Nothing found");
                // }

                return result;
                }
            );
            // return response;
        };

    }
}
)();