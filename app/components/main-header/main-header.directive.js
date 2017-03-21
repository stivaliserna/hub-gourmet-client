/* global angular */

angular
  .module('hubGourmetApp')
  .directive('mainHeader', [
    'ShoppingCartService',
    'authService',
    'localStorageService',
    '$location',
    '$log',
    mainHeader
  ])

function mainHeader (ShoppingCartService, authService, localStorageService, $location, $log) {
  return {
    templateUrl: 'app/components/main-header/main-header.directive.tpl.html',
    controller: mainHeaderController,
    controllerAs: 'mainHeader'
  }

  function mainHeaderController () {
    let vm = this

    vm.authService = authService
    vm.showAdminComponents = showAdminComponents
    vm.hideClientComponents = hideClientComponents
    vm.showCart = showCart

    function showAdminComponents () {
      return !!localStorageService.get('id_token')
    }

    function hideClientComponents () {
      return !localStorageService.get('id_token')
    }

    function showCart () {
      return !!localStorageService.get('id_token') && ($location.path() === '/products')
    }
  }
}
