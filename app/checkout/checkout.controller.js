/* global angular */

angular
  .module('hubGourmetApp')
  .controller('checkoutController', [
    'ShoppingCartService',
    checkoutController
  ])

function checkoutController (ShoppingCartService) {
  let vm = this

  vm.getItems = ShoppingCartService.getItems
  vm.total = ShoppingCartService.total
}
