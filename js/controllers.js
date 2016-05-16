angular.module('app.controllers', [])
  
.controller('enyaLoginCtrl', function($scope, $ionicPopup) {
        $scope.event = function(pwd) {
            var alertPopup = $ionicPopup.alert({
                title: pwd,
                template: CryptoJS.SHA512(pwd).toString(CryptoJS.enc.Base64)
            });
        }
})
 