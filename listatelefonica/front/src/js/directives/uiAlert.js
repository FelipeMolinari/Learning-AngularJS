angular.module("listaTelefonica").directive('uiAlert', function () {
  return {
    templateUrl: "components/alert.html",
    replace: true,
    restrict: 'E',
    scope: {
      title: "@",
      message: "="
    },
    transclude: true
  }
})