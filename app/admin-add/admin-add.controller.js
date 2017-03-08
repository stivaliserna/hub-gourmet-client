/* global angular */

angular
  .module('hubGourmetApp')
  .controller('adminAddController', [
    '$location',
    '$log',
    'ProductService',
    adminAddController
  ])

function adminAddController ($location, $log, ProductService) {
  let vm = this

  vm.newProductModel = null

  // expose functions
  vm.addProduct = addProduct

  function addProduct (product) {
    ProductService.save(product).$promise.then(function () {
      vm.newProductModel = null
      $location.url('/admin/products')
    }).catch($log.error)
  }
}
