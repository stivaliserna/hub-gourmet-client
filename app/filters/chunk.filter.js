/* global angular */

angular
  .module('hubGourmetApp')
  .filter('chunk', chunk)

function chunk () {
  return function _chunk (arr, size) {
    var result = []
    var index = 0
    while (index < arr.length) result.push(arr.slice(index, index += size))
    return result
  }
}
