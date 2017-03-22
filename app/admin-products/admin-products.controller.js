/* global angular */

angular
  .module('hubGourmetApp')
  .controller('adminProductsController', [
    'ProductService',
    'ShoppingCartService',
    adminProductsController
  ])

function adminProductsController (ProductService, ShoppingCartService) {
  let vm = this

  vm.newProductModel = null
  vm.productsList = ProductService.query({})
  vm.archivedProduct = archivedProduct

  function archivedProduct (product) {
    product.archived = true
    product.$save()
  }
}
