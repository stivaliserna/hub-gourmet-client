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
  console.log($routeParams)
  var vm = this

  vm.orderModel = OrderService.get({ _id: $routeParams._id })
}
