/* global angular */

angular
  .module('hubGourmetApp')
  .controller('productsController', [
    'ProductService',
    productsController
  ])

function productsController (ProductService) {
  let vm = this

  vm.productsList = ProductService.query({})
}
