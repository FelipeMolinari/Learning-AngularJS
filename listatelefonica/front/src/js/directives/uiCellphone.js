angular.module("listaTelefonica").directive("uiCellphone", function () {
  function _formatCellphone(cellphone) {
    cellphone = cellphone.replace(/[^0-9]+/g, "");
    if (cellphone.length > 0) {
      cellphone = '(' + cellphone.substring(0);
    } if (cellphone.length > 2) {
      cellphone = cellphone.substring(0, 3) + ') ' + cellphone.substring(3);
    }
    if (cellphone.length > 8) {

      cellphone = cellphone.substring(0, 9) + '-' + cellphone.substring(8, 12);
    }
    return cellphone;
  }
  return {
    require: "ngModel",
    link: function (scope, element, attrs, ctrl) {
      element.bind('keyup', function () {
        ctrl.$setViewValue(_formatCellphone(ctrl.$viewValue))
        ctrl.$render()

      })
    }
  }
})