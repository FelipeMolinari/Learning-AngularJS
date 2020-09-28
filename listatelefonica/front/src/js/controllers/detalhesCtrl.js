angular.module("listaTelefonica").controller("detalhesCtrl", function ($scope, $routeParams, contato) {
  $scope.contato = contato.data;



});