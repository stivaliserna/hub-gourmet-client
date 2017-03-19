/* global angular */

angular.module('hubGourmetApp').config([
  '$routeProvider',
  routerConfig
])

function routerConfig ($routeProvider) {
  $routeProvider
   .when('/login', {
     templateUrl: 'app/components/login/login.tpl.html',
     controller: 'LoginController',
     controllerAs: 'login'
   })
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

angular
.module('hubGourmetApp')
.config(['$provide', function ($provide) {
  $provide.decorator('$locale', ['$delegate', function ($delegate) {
    $delegate.NUMBER_FORMATS.PATTERNS[1].negPre = 'Bs. -'
    $delegate.NUMBER_FORMATS.PATTERNS[1].negSuf = ''
    $delegate.NUMBER_FORMATS.PATTERNS[1].posPre = 'Bs. '
    $delegate.NUMBER_FORMATS.PATTERNS[1].posSuf = ''
    return $delegate
  }])
}])

angular
.module('hubGourmetApp')
.config(function (lockProvider, jwtOptionsProvider) {
  lockProvider.init({
    clientID: 'NXVJxodYA5uc0slHzcrFBY1XRSQokdd4',
    domain: 'hubgourmet.auth0.com',
    options: {
      _idTokenVerification: false
    }
  })
  jwtOptionsProvider.config({
    tokenGetter: function () {
      return localStorage.getItem('id_token')
    }
  })
})
