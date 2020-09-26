angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI) {
  $scope.app = "Lista Telefonica";
  $scope.contatos = [];
  $scope.operadoras = [];

  const carregarContatos = function () {
    contatosAPI.getContatos().then(function (data) {
      $scope.contatos = data.data;
    }, function (error) {
      console.log(error)
      $scope.error = "Falha ao carregar os dados";
    })
  }

  $scope.adicionarContato = function (contato) {
    contato.data = new Date();
    contatosAPI.addContatos(contato).then(function () {
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos()
    }, function (error, status) {
      $scope.error = `Falha ao carregar os dados ${error}`;

    })

  };
  const carregarOperadoras = function () {
    operadorasAPI.getOperadoras().then(function (data) {
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