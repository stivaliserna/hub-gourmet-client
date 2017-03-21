/* global angular */

angular
  .module('hubGourmetApp')
  .service('OrderService', [
    '$resource',
    'API_BASE_URL',
    OrderService
  ])

function OrderService ($resource, API_BASE_URL) {
  return $resource(
     API_BASE_URL + '/orders/:_id',
    {
      _id: '@_id'
    },
    {
      save: { method: 'PUT' },
      create: { method: 'POST', url: API_BASE_URL + '/orders' }
    }
  )
}
