/* global angular */

angular
  .module('hubGourmetApp')
  .service('ProductService', [
    '$resource',
    'API_BASE_URL',
    ProductService
  ])

function ProductService ($resource, API_BASE_URL) {
  return $resource(
      API_BASE_URL + '/products/:_id',
    {
      _id: '@_id'
    },
    {
      save: { method: 'PUT' },
      create: { method: 'POST', url: API_BASE_URL + '/products' }
    }
  )
}
