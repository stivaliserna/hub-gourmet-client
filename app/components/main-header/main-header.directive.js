/* global angular */

angular
  .module('hubGourmetApp')
  .directive('mainHeader', [
    'ShoppingCartService',
    mainHeader
  ])

function mainHeader (ShoppingCartService) {
  return {
    templateUrl: 'app/components/main-header/main-header.directive.tpl.html',
    controller: mainHeaderController,
    controllerAs: 'cart'
  }

  function mainHeaderController () {
    let vm = this
  }
}
