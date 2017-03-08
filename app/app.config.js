/* global angular */

angular.module('hubGourmetApp').config([
  '$routeProvider',
  routerConfig
])

function routerConfig ($routeProvider) {
  $routeProvider
   .when('/products', {
     templateUrl: '/app/products/products.tpl.html',
     controller: 'productsController',
     controllerAs: 'products'
   })
   .when('/admin/products', {
     templateUrl: '/app/admin-products/admin-products.tpl.html',
     controller: 'adminProductsController',
     controllerAs: 'admin'
   })
   .when('/admin/product/add', {
     templateUrl: '/app/admin-add/admin-add.tpl.html',
     controller: 'adminAddController',
     controllerAs: 'add'
   })
   .otherwise('/products')
}
