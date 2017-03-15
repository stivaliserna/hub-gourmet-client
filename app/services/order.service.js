/* global angular */

angular
  .module('hubGourmetApp')
  .service('OrderService', [
    '$resource',
    OrderService
  ])

function OrderService ($resource) {
  return $resource(
    'http://localhost:3001/orders/:_id',
    {
      _id: '@_id'
    },
    {
      save: { method: 'PUT' },
      create: { method: 'POST', url: 'http://localhost:3001/orders' }
    }
  )
}
