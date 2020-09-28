angular.module("listaTelefonica").directive("uiDate", function ($filter) {
  function _formatDate(date) {

    date = date.replace(/[^0-9]+/g, "");
    if (date.length > 2) {
      date = date.substring(0, 2) + "/" + date.substring(2)
    } if (date.length > 5) {
      date = date.substring(0, 5) + "/" + date.substring(5, 9)
    }
    return date;

  }
  return {
    require: "ngModel",
    link: function (scope, element, attrs, ctrl) {
      element.bind("keyup", () => {
        ctrl.$setViewValue(_formatDate(ctrl.$viewValue))
        ctrl.$render()
      })
      ctrl.$parsers.push(function (value) {
        if (value.length === 10) {
          const dataArray = value.split("/");
          return new Date(dataArray[2], dataArray[1] - 1, dataArray[0]).getTime();
        }
      })
      ctrl.$formatters.push(function (value) {
        return $filter('date')(value, "dd/MM/yyyy")
      })
    }

  }

})