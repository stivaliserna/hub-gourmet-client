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

  vm.hasMore = true
  vm.limit = 3
  vm.skip = 0
  vm.productsList = []

  vm.addItem = ShoppingCartService.addItem
  vm.fetchProducts = fetchProducts

  activate()

  function activate () {
    fetchProducts(vm.skip, vm.limit)
  }

  function fetchProducts (skip, limit) {
    ProductService.query({ skip: skip, limit: limit }).$promise.then(function success (data) {
      vm.productsList = vm.productsList.concat(data)
      vm.hasMore = !!data.length
      vm.skip += vm.limit
    })
  }
}
