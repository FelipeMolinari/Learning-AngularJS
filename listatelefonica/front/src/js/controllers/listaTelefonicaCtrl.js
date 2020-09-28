angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatos) {

  $scope.app = "Lista Telefonica"
  $scope.contatos = contatos.data

  console.log($scope.contatos)
  function init() {
    calcularImposto($scope.contatos)
  }
  function calcularImposto(contatos) {
    contatos.forEach((contato) => {
      contato.operadora.precoComImposto = calcularPrecoComImposto(contato.operadora.preco)
    })
  }
  function calcularPrecoComImposto(preco) {
    const imposto = 1.4;
    return preco * imposto;
  }
  $scope.apagarContatos = function (contatos) {
    $scope.contatos = contatos.filter(function (contato) {
      if (!contato.selecionado) return contato;
    });
    $scope.verificarContatoSelecionado($scope.contatos)
  };

  $scope.verificarContatoSelecionado = function (contatos) {
    $scope.temContatoSelecionado = contatos.some(function (contato) {
      return contato.selecionado;
    });
    console.log($scope.temContatoSelecionado)
  };

  $scope.ordenarPor = function (campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  init();
});