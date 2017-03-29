/* global angular */

angular
  .module('hubGourmetApp')
  .controller('productsController', [
    '$filter',
    'ProductService',
    'ShoppingCartService',
    productsController
  ])

function productsController ($filter, ProductService, ShoppingCartService) {
  let vm = this
  let chunk = $filter('chunk')

  vm.hasMore = true
  vm.limit = 3
  vm.skip = 0
  // Not an array of products, but an array of chunks
  vm.productsList = []

  vm.addItem = ShoppingCartService.addItem
  vm.fetchProducts = fetchProducts

  activate()

  function activate () {
    fetchProducts(vm.skip, vm.limit)
  }

  function fetchProducts (skip, limit) {
    ProductService.query({ skip: skip, limit: limit }).$promise.then(function success (data) {
      let chunks = chunk(data, 3)

      chunks.forEach(function (el) {
        vm.productsList.push(el)
      })

      vm.hasMore = data.length === vm.limit
      vm.skip += vm.limit
    })
  }
}
