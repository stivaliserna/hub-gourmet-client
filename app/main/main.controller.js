'use strict'

angular
  .module('hubGourmetApp')
  .controller('mainController', mainController)

mainController.$inject = ['localStorageService', '$location']

function mainController (localStorageService, $location) {
  if (localStorageService.get('id_token')) {
    $location.url('/admin/products')
  } else {
    $location.url('/products')
  }
}
