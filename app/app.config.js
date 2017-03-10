/* global angular */

angular.module('hubGourmetApp').config([
  '$routeProvider',
  routerConfig
])

function routerConfig ($routeProvider) {
  $routeProvider
   .when('/products', {
     templateUrl: 'app/products/products.tpl.html',
     controller: 'productsController',
     controllerAs: 'products'
   })
   .when('/checkout', {
     templateUrl: 'app/checkout/checkout.tpl.html',
     controller: 'checkoutController',
     controllerAs: 'checkout'
   })
   .when('/admin/products', {
     templateUrl: 'app/admin-products/admin-products.tpl.html',
     controller: 'adminProductsController',
     controllerAs: 'admin'
   })
   .when('/admin/product/add', {
     templateUrl: 'app/admin-add/admin-add.tpl.html',
     controller: 'adminAddController',
     controllerAs: 'add'
   })
   .when('/admin/product/edit/:productID', {
     templateUrl: 'app/admin-products/admin-products.tpl.html',
     controller: 'adminProductsController',
     controllerAs: 'admin'
   })
   .otherwise('/products')
}
