/* global angular */

angular
  .module('hubGourmetApp')
  .directive('shoppingCartMenu', [
    'ShoppingCartService',
    shoppingCartMenu
  ])

function shoppingCartMenu (ShoppingCartService) {
  return {
    templateUrl: 'app/components/shopping-cart-menu/shopping-cart-menu.directive.tpl.html',
    controller: ShppingCartMenuController,
    controllerAs: 'cart'
  }

  function ShppingCartMenuController () {
    let vm = this

    vm.count = ShoppingCartService.count
  }
}
