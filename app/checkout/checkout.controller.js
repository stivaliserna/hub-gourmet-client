/* global angular */
'use strict'

angular
  .module('hubGourmetApp')
  .controller('checkoutController', [
    'ShoppingCartService',
    'OrderService',
    '$log',
    '$location',
    checkoutController
  ])

function checkoutController (ShoppingCartService, OrderService, $log, $location) {
  var vm = this

  vm.getItems = ShoppingCartService.getItems
  vm.total = ShoppingCartService.total
  vm.removeItem = ShoppingCartService.removeItem
  vm.addItem = ShoppingCartService.addItem

  vm.newOrderModel = null

  // expose functions
  vm.addOrder = addOrder

  function addOrder (order) {
    order.items = ShoppingCartService.getItems().map(item => {
      return {
        price: item.product.price,
        quantity: item.quantity,
        product: item.product._id
      }
    })
    OrderService.create(order).$promise.then(function (data) {
      vm.newOrderModel = null
      ShoppingCartService.clearItems()
      $location.url('/orders/' + data._id)
    }).catch($log.error)
  }
}
