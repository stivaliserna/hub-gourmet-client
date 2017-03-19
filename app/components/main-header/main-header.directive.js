/* global angular */

angular
  .module('hubGourmetApp')
  .directive('mainHeader', [
    'ShoppingCartService',
    'authService',
    mainHeader
  ])

function mainHeader (ShoppingCartService, authService) {
  return {
    templateUrl: 'app/components/main-header/main-header.directive.tpl.html',
    controller: mainHeaderController,
    controllerAs: 'cart'
  }

  function mainHeaderController () {
    let vm = this

    vm.authService = authService
  }
}
