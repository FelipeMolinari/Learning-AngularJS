angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, $location, contatosAPI, operadoras) {
  $scope.operadoras = operadoras.data;


  $scope.adicionarContato = function (contato) {
    contato.data = new Date();
    contatosAPI.addContatos(contato).then(function () {
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      $location.path("/contatos")
    }, function (error, status) {
      $scope.error = `Falha ao carregar os dados`;

    })

  };

});