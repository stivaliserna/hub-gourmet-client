/* global angular */

angular
  .module('hubGourmetApp')
  .service('ProductService', [
    '$resource',
    ProductService
  ])

function ProductService ($resource) {
  return $resource(
    'http://localhost:3001/products',
    { id: '@id' },
    {
      update: { method: 'PUT' }
    }
  )
}
