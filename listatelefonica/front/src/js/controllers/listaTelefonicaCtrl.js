angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http) {
  $scope.app = "Lista Telefonica";
  $scope.contatos = [];
  $scope.operadoras = [];

  const carregarContatos = function () {
    $http.get('http://localhost:9000/contatos').then(function (data) {
      $scope.contatos = data.data;
    }, function (error) {
      console.log(error)
      $scope.error = "Falha ao carregar os dados";
    })
  }

  $scope.adicionarContato = function (contato) {
    contato.data = new Date();
    $http.post('http://localhost:9000/contatos', contato).then(function (data) {
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos()
    }, function (error, status) {
      $scope.error = `Falha ao carregar os dados ${error}`;

    })

  };
  const carregarOperadoras = function () {
    $http.get('http://localhost:9000/operadoras').then(function (data) {
      $scope.operadoras = data.data;
    }, function (error) {
      console.log(error)
      $scope.error = "Falha ao carregar os dados";
    })
  }

  $scope.apagarContatos = function (contatos) {
    $scope.contatos = contatos.filter(function (contato) {
      if (!contato.selecionado) return contato;
    });
  };
  $scope.isContatoSelecionado = function (contatos) {
    return contatos.some(function (contato) {
      return contato.selecionado;
    });
  };
  $scope.ordenarPor = function (campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  carregarContatos();
  carregarOperadoras();
});