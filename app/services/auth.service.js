'use strict'

angular
  .module('hubGourmetApp')
  .service('authService', authService)

function authService ($log, lock, authManager, localStorageService) {
  function login () {
    lock.show()
  }

  // Set up the logic for when a user authenticates
  // This method is called from app.run.js
  function registerAuthenticationListener () {
    lock.on('authenticated', function (authResult) {
      $log.log('User authenticated: ', authResult)
      localStorageService.set('id_token', authResult.idToken)
      authManager.authenticate()
    })

    lock.on('authorization_error', function (err) {
      $log.error(err)
    })
  }

  return {
    login: login,
    registerAuthenticationListener: registerAuthenticationListener,
    logout: logout
  }

  function logout () {
    localStorageService.remove('id_token')
    authManager.unauthenticate()
  }
}
