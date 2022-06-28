(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter) {
  $scope.dishes = "";
  $scope.msj = "";
  $scope.checkDishes = function() {
    
    if($scope.dishes.trim()==""){
      $scope.msj="Please enter data first";
      return;
    }
    const dishesArray = $scope.dishes.split(',');
    var y=0;
    var emptyData=false;
    for(var i = 0; i < dishesArray.length; i++){
      //console.log(dishesArray[i]+i);
      if(dishesArray[i].trim()==""){
        $scope.msj="Please not enter empty items.";
        emptyData=true;
        break;
      }
      y++;
    }
    if(!emptyData){
      if(y>3){
        $scope.msj="Too much!";
      }else{
        $scope.msj="Enjoy!";
      }
    }
    
  };
}
 

})();