angular.module("listaTelefonica").filter('ellipses', function () {
  return function (input, value) {
    if (input.length > value)
      return input.substring(0, (value || 10)) + '...';
    return input;
  }
})