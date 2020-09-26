angular.module('listaTelefonica').filter('name', function () {
  return (input) => {
    const splited = input.split(' ').map(elem => {
      if (/(da|de)/.test(elem.toLowerCase())) return elem.toLowerCase()
      const base = elem.toLowerCase();
      const formated = base.charAt(0).toUpperCase() + base.substring(1);
      return formated;
    });
    const result = splited.join(" ")
    return result;
  }
}) 