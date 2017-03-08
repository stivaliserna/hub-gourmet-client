/* global angular */

angular
  .module('hubGourmetApp')
  .controller('adminProductsController', [
    'ProductService',
    adminProductsController
  ])

function adminProductsController (ProductService) {
  let vm = this

  vm.newProductModel = null
  vm.productsList = ProductService.query({})
}
