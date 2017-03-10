/* global angular */

angular
  .module('hubGourmetApp')
  .service('ProductService', [
    '$resource',
    ProductService
  ])

function ProductService ($resource) {
  return $resource(
    'https://hubgourmet.herokuapp.com/products/:productID',
    {
      productID: '@productID'
    },
    {
      save: { method: 'PUT' },
      create: { method: 'POST', url: 'https://hubgourmet.herokuapp.com/products' }
    }
  )
}
