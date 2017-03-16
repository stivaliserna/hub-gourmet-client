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
  console.log('controller loaded')
  var vm = this

  vm.getItems = ShoppingCartService.getItems
  vm.total = ShoppingCartService.total
  vm.removeItem = ShoppingCartService.removeItem
  vm.addItem = ShoppingCartService.addItem

  vm.newOrderModel = null

  // expose functions
  vm.addOrder = addOrder

  function addOrder (order) {
    console.log('sending')
    order.items = ShoppingCartService.getItems().map(item => {
      return {
        price: item.product.price,
        quantity: item.quantity,
        product: item.product._id
      }
    })
    OrderService.create(order).$promise.then(function () {
      vm.newOrderModel = null
      $location.url('/checkout')
    }).catch($log.error)
  }
}
