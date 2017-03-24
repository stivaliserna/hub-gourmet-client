/* global angular */

angular
  .module('hubGourmetApp')
  .directive('mainFooter', [
    mainFooter
  ])

function mainFooter () {
  return {
    templateUrl: 'app/components/main-footer/main-footer.directive.tpl.html',
    controller: mainFooterController,
    controllerAs: 'mainFooter'
  }

  function mainFooterController () {
    let vm = this
  }
}
