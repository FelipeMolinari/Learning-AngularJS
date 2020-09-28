angular.module("listaTelefonica").config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.when("/contatos", {
    templateUrl: '/components/contatos.html',
    controller: "listaTelefonicaCtrl",
    resolve: {
      contatos: function (contatosAPI) {
        return contatosAPI.getContatos();

      }
    }
  });
  $routeProvider.when("/contatos/novo", {
    templateUrl: '/components/adicionarContatos.html',
    controller: "novoContatoCtrl",
    resolve: {
      operadoras: function (operadorasAPI) {
        return operadorasAPI.getOperadoras();
      }
    }
  });
  $routeProvider.when("/contatos/:id", {
    templateUrl: '/components/detalherContato.html',
    controller: "detalhesCtrl",
    resolve: {
      contato: function (contatosAPI, $route) {
        return contatosAPI.getContato($route.current.params.id);
      }
    }
  });
  $routeProvider.otherwise({ redirectTo: "/contatos" });
});