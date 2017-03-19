/* global angular */

angular
  .module('hubGourmetApp')
  .config(localStorageConfig)
  .config(routerConfig)
  .config(configCurrencyLocale)
  .config(authConfig)
  .config(httpConfig)

routerConfig.$inject = ['$routeProvider']
function routerConfig ($routeProvider) {
  $routeProvider
   .when('/login', {
     templateUrl: 'app/components/login/login.tpl.html',
     controller: 'LoginController',
     controllerAs: 'login'
   })
   .when('/main', {
     controller: 'mainController',
     controllerAs: 'main',
     template: ''
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
   .otherwise('/main')
}

localStorageConfig.$inject = ['localStorageServiceProvider']
function localStorageConfig (localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('hubGourmetApp')
}

configCurrencyLocale.$inject = ['$provide']
function configCurrencyLocale ($provide) {
  $provide.decorator('$locale', ['$delegate', function ($delegate) {
    $delegate.NUMBER_FORMATS.PATTERNS[1].negPre = 'Bs. -'
    $delegate.NUMBER_FORMATS.PATTERNS[1].negSuf = ''
    $delegate.NUMBER_FORMATS.PATTERNS[1].posPre = 'Bs. '
    $delegate.NUMBER_FORMATS.PATTERNS[1].posSuf = ''
    return $delegate
  }])
}

authConfig.$inject = ['lockProvider', 'jwtOptionsProvider']
function authConfig (lockProvider, jwtOptionsProvider) {
  lockProvider.init({
    clientID: 'NXVJxodYA5uc0slHzcrFBY1XRSQokdd4',
    domain: 'hubgourmet.auth0.com',
    options: {
      _idTokenVerification: false
    }
  })

  jwtOptionsProvider.config({
    tokenGetter: function () {
      return localStorage.getItem('hubGourmetApp.id_token')
    }
  })
}

httpConfig.$inject = ['$httpProvider']
function httpConfig ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor')
}
