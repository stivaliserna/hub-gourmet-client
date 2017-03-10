/* global angular */

angular
  .module('hubGourmetApp')
  .controller('productsController', [
    'ProductService',
    'ShoppingCartService',
    productsController
  ])

function productsController (ProductService, ShoppingCartService) {
  let vm = this

  vm.productsList = ProductService.query({})
  vm.addItem = ShoppingCartService.addItem
}
