'use strict'

angular
  .module('hubGourmetApp')
  .controller('LoginController', LoginController)

function LoginController (authService) {
  var vm = this

  authService.login()
}
