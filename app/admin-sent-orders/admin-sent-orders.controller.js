/* global angular */
'use strict'

angular
  .module('hubGourmetApp')
  .controller('sentOrdersController', [
    'OrderService',
    sentOrdersController
  ])

function sentOrdersController (OrderService) {
  console.log('Controller loaded')
  var vm = this

  vm.ordersList = OrderService.query({})
}
