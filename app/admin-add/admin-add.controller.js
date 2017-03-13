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
  vm.measureUnits = [
      {unit: 'g', label: 'Gramos'},
      {unit: 'l', label: 'Litros'},
      {unit: 'und', label: 'Unidades'}
  ]

  // expose functions
  vm.addProduct = addProduct

  function addProduct (product) {
    ProductService.create(product).$promise.then(function () {
      vm.newProductModel = null
      $location.url('/admin/products')
    }).catch($log.error)
  }
}
