/* global angular */

angular
  .module('hubGourmetApp')
  .service('ProductService', [
    '$resource',
    ProductService
  ])

function ProductService ($resource) {
  return $resource(
    'http://localhost:3001/products/:productID',
    {
      productID: '@productID'
    },
    {
      save: { method: 'PUT' }
    }
  )
}
