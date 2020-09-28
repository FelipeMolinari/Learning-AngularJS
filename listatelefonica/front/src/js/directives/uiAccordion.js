angular.module("listaTelefonica").directive("uiAccordions", function () {
  return {
    controller: function ($scope, $element, $attrs) {
      const accordions = [];

      this.registeraccordion = function (accordion) {
        accordions.push(accordion)
      }
      this.closeAll = function () {
        accordions.forEach((accordion) => {
          accordion.isOpened = false;
        })
      }
    }
  }
})
angular.module("listaTelefonica").directive("uiAccordion", function () {
  return {
    templateUrl: 'components/accordion.html',
    transclude: true,
    require: "^uiAccordions",
    scope: {
      title: "@"
    },
    link: function (scope, element, attrs, ctrl) {
      ctrl.registeraccordion(scope)
      scope.open = function () {
        if (scope.isOpened) {
          scope.isOpened = !scope.isOpened;
        } else {
          ctrl.closeAll();
          scope.isOpened = !scope.isOpened;

        }
      }
    }
  }
})