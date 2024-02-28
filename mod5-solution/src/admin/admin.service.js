(function () {
    'use strict';

    angular.module('public')
    .service('AdminService', AdminService)
    ;

    AdminService.$inject = [];
    function AdminService() {
        var service = this;
        service.name;
        service.lastName;
        service.email;
        service.phoneNumber;
        service.favoritenumberdish;
        service.foundItem;
        service.signup =false;

        service.setUserData = function (name,lastName,email,phoneNumber,favoritenumberdish,foundItem){
            //Poner los datos del usuario
            service.name = name;
            service.lastName = lastName;
            service.email=email;
            service.phoneNumber=phoneNumber;
            service.favoritenumberdish=favoritenumberdish;
            service.foundItem = foundItem;
            service.signup = true;
        };

        service.getName = function(){
            return service.name;
        };

        service.getLastName = function(){
            return service.lastName;
        }

        service.getEmail = function(){
            return service.email;
        }

        service.getPhoneNumber = function(){
            return service.phoneNumber;
        }

        service.getFoundItem = function(){
            return service.foundItem;
        }

        service.isSignup = function(){
            return service.signup;
        }

        service.getCategoryShortName = function(){
            
            if(typeof service.favoritenumberdish === 'undefined'){
                return service.favoritenumberdish;
            }
            const result = service.favoritenumberdish.replace(/\s+/g, "").match(/[a-z]+|[^a-z]+/gi);
            return result[0];
        }
    }
}
)();