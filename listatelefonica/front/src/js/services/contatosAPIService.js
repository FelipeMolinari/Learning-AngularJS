angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
  const _getContatos = () => {
    return $http.get(`${config.baseURL}/contatos`)
  }
  const _addContatos = (data) => {
    return $http.post(`${config.baseURL}/contatos`, data);
  }

  return {
    getContatos: _getContatos,
    addContatos: _addContatos,
  }
})