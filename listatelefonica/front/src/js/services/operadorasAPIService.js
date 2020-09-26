angular.module("listaTelefonica").factory("operadorasAPI", function ($http, config) {
  const _getOperadoras = () => {
    return $http.get(`${config.baseURL}/operadoras`);
  }
  return {
    getOperadoras: _getOperadoras
  }
})