/* global angular */

angular
  .module('hubGourmetApp')
  .service('OrderService', [
    '$resource',
    OrderService
  ])

function OrderService ($resource) {
  return $resource(
    'https://hubgourmet.herokuapp.com/orders/:_id',
    /* 'http://localhost:3001/orders/:_id', */
    {
      _id: '@_id'
    },
    {
      save: { method: 'PUT' },
      create: { method: 'POST', url: 'https://hubgourmet.herokuapp.com/orders' }
      /* create: { method: 'POST', url: 'http://localhost:3001/orders' } */
    }
  )
}
