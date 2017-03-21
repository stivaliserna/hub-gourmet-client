/* global angular */

angular
  .module('hubGourmetApp')
  .service('ProductService', [
    '$resource',
    ProductService
  ])

function ProductService ($resource) {
  return $resource(
      'https://hubgourmet.herokuapp.com/products/:_id',
      // 'http://localhost:3001/products/:_id',
    {
      _id: '@_id'
    },
    {
      save: { method: 'PUT' },
      create: { method: 'POST', url: 'https://hubgourmet.herokuapp.com/products' }
      // create: { method: 'POST', url: 'http://localhost:3001/products' }
    }
  )
}
