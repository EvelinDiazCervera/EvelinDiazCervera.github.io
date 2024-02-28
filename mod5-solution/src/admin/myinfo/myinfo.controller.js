(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['AdminService'];

function MyInfoController(AdminService) {
  var $ctrl = this;
  $ctrl.isSignUp = AdminService.isSignup();
  $ctrl.name= AdminService.getName();
  $ctrl.lastName= AdminService.getLastName();
  $ctrl.email= AdminService.getEmail();
  $ctrl.phoneNumber= AdminService.getPhoneNumber();
  $ctrl.foundItem = AdminService.getFoundItem();
  $ctrl.categoryShortName = AdminService.getCategoryShortName();
  console.log($ctrl.categoryShortName);
  // noSignUp function () {

  //   var promise = 
  //   console.log(promise);
    
  //   promise.then(function (result) {
  //     $ctrl.errorMessage=null;
  //     console.log("Paso aqui2");
  //     console.log(result.data);
  //     // $ctrl.foundItem = result.data;
  //     // if($ctrl.foundItem === null){
  //     //   $ctrl.noSignUp = true;
  //     //   $ctrl.saved = false;
  //     // }else{
  //     //   $ctrl.noSignUp = false;
  //     //   AdminService.setUserData($ctrl.name,$ctrl.lastName,$ctrl.email,$ctrl.phoneNumber,$ctrl.favoritenumberdish,$ctrl.foundItem);
  //     //   $ctrl.saved = true;
  //     // }
  //     // console.log("result: ");
  //     // console.log($ctrl.foundItem);
  //     // console.log(AdminService.getName());
  //   })
    
  // };

  // $ctrl.name = getName;
  // $ctrl.lastName;
  // $ctrl.email;
  // $ctrl.phoneNumber;
  // $ctrl.favoritenumberdish;
  // $ctrl.menuItems = menuItems;
  // $ctrl.foundItem == [];
  



}

})();
