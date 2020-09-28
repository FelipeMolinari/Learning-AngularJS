angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
  const _getContatos = () => {
    return $http.get(`${config.baseURL}/contatos`)
  }
  const _getContato = (id) => {
    return $http.get(`${config.baseURL}/contato/${id}`)
  }
  const _addContatos = (data) => {
    return $http.post(`${config.baseURL}/contatos`, data);
  }

  return {
    getContatos: _getContatos,
    addContatos: _addContatos,
    getContato: _getContato
  }
})