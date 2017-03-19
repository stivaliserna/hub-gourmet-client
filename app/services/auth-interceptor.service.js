angular
  .module('hubGourmetApp')
  .factory('authInterceptor', authInterceptor)

authInterceptor.$inject = ['localStorageService']
function authInterceptor (localStorageService) {
  return { request: request }

  function request (config) {
    if (localStorageService.get('id_token')) {
      angular.merge(config, {
        headers: {
          Authorization: 'Bearer ' + localStorageService.get('id_token')
        }
      })
    }

    return config
  }
}
