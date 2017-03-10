/* global angular */

angular
  .module('hubGourmetApp')
  .directive('shoppingCartMenu', [
    'ShoppingCartService',
    shoppingCartMenu
  ])

let template = `
<a href="#!/checkout">
  <i class="glyphicon glyphicon-shopping-cart pull-right nav-cart"></i><span class="counting pull-right">{{ cart.count() }}</span>
</a>
`

function shoppingCartMenu (ShoppingCartService) {
  return {
    template: template,
    controller: ShppingCartMenuController,
    controllerAs: 'cart'
  }

  function ShppingCartMenuController () {
    let vm = this

    vm.count = ShoppingCartService.count
  }
}
