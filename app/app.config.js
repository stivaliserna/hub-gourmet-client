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
   .when('/orders/:_id', {
     templateUrl: 'app/client-order/client-order.tpl.html',
     controller: 'clientOrderController',
     controllerAs: 'clientOrder'
   })
   .when('/admin/products', {
     templateUrl: 'app/admin-products/admin-products.tpl.html',
     controller: 'adminProductsController',
     controllerAs: 'admin'
   })
   .when('/admin/products/add', {
     templateUrl: 'app/admin-add/admin-add.tpl.html',
     controller: 'adminAddController',
     controllerAs: 'add'
   })
   .when('/admin/products/edit/:_id', {
     templateUrl: 'app/admin-products/admin-products.tpl.html',
     controller: 'adminProductsController',
     controllerAs: 'admin'
   })
   .when('/admin/orders', {
     templateUrl: 'app/admin-sent-orders/admin-sent-orders.tpl.html',
     controller: 'sentOrdersController',
     controllerAs: 'order'
   })
   .otherwise('/products')
}

angular.module('hubGourmetApp').config(function (localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('hubGourmetApp')
})

