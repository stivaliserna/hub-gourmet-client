/* global angular */
'use strict'

angular
  .module('hubGourmetApp')
  .controller('clientOrderController', [
    'OrderService',
    '$routeParams',
    clientOrderController
  ])

function clientOrderController (OrderService, $routeParams) {
  var vm = this

  vm.orderModel = OrderService.get({ _id: $routeParams._id })
  vm.orderTotal = orderTotal

  function orderTotal (list) {
    if (!list) return 0
    return list
      .map(item => item.price * item.quantity)
      .reduce((acc, val) => acc + val, 0)
  }
}
