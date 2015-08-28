angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.selectMe = function(event) {
    $('img').removeClass('tclicked');
    angular.element(event.target).addClass('tclicked');
  };

})

.controller('LoginCtrl', function($scope) {

})

.controller('TermsCtrl', function($scope) {

})

.controller('HomeCtrl', function($scope) {

})

.controller('HowtoplayCtrl', function($scope) {

})

.controller('GoplayCtrl', function($scope, $timeout, $ionicModal, $ionicPopover) {


  $ionicModal.fromTemplateUrl('templates/modal-ganesh.html', {
    id: '1',
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal1 = modal;
  });

  $scope.openmodal = function() {
    $scope.modal1.show();
  };

  $scope.closemodal = function() {
    $scope.modal1.hide();
  };


})

.controller('ChooseCtrl', function($scope) {

})

.controller('PlayCtrl', function($scope) {

});
