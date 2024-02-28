(function () {
"use strict";

angular.module('public')
.controller('SingUpController', SingUpController);

SingUpController.$inject = ['menuItems','MenuItemService','AdminService'];

function SingUpController(menuItems,MenuItemService,AdminService) {
  var $ctrl = this;
  $ctrl.name;
  $ctrl.lastName;
  $ctrl.email;
  $ctrl.phoneNumber;
  $ctrl.favoritenumberdish;
  $ctrl.menuItems = menuItems;
  $ctrl.foundItem == [];
  


  $ctrl.searchByTerm = function (searchfavoritenumberdish) {
    $ctrl.noitemExists = false;
    const result = searchfavoritenumberdish.replace(/\s+/g, "").match(/[a-z]+|[^a-z]+/gi);
    // console.log(result[0]);
    // console.log(result[1]);

    var promise = MenuItemService.getMatchedMenuItems(result[0],result[1]-1);

    promise.then(function (result) {
      $ctrl.errorMessage=null;
      $ctrl.foundItem = result.data;
      if($ctrl.foundItem === null){
        $ctrl.noitemExists = true;
        $ctrl.saved = false;
      }else{
        $ctrl.noitemExists = false;
        AdminService.setUserData($ctrl.name,$ctrl.lastName,$ctrl.email,$ctrl.phoneNumber,$ctrl.favoritenumberdish,$ctrl.foundItem);
        $ctrl.saved = true;
      }
      console.log("result: ");
      console.log($ctrl.foundItem);
      console.log(AdminService.getName());
    })
    .catch(function (error) {
        console.log(error);
        $ctrl.foundItem = [];
        $ctrl.errorMessage = error.message;
        $ctrl.noitemExists = false;
    })  
  };

}

})();
