/* global angular */
'use strict'

angular
  .module('hubGourmetApp')
  .controller('sentOrdersController', [
    'OrderService',
    sentOrdersController
  ])

function sentOrdersController (OrderService) {
  var vm = this

  vm.list = OrderService.query({})
  vm.calculateTotalAmount = calculateTotalAmount
  vm.calculateQuantity = calculateQuantity
  vm.orderStatus = orderStatus

  function calculateTotalAmount (list) {
    return list
      .map(item => item.product.price * item.quantity)
      .reduce((acc, val) => acc + val, 0)
  }

  function calculateQuantity (list) {
    return list.reduce((acc, val) => acc + val.quantity, 0)
  }

  function orderStatus (order) {
    order.completed = true
    order.$save()
  }
}
