/* global angular */

angular
  .module('hubGourmetApp')
  .service('ProductService', [
    '$resource',
    ProductService
  ])

function ProductService ($resource) {
  return $resource(
    'https://hubgourmet.herokuapp.com/products/:id',
    {
      productID: '@productID'
    },
    {
      save: { method: 'PUT' }
    }
  )
}
