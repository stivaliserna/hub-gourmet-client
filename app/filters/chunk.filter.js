/* global angular, objectHash */

angular
  .module('hubGourmetApp')
  .filter('chunk', chunk)

function memoize (fn) {
  var cache = {}
  return function (...args) {
    var hash = objectHash(args)

    if (hash in cache) return cache[hash]
    cache[hash] = fn(...args)
    return cache[hash]
  }
}

function _chunk (arr, size) {
  if (!arr) return []

  var result = []
  var index = 0

  while (index < arr.length) result.push(arr.slice(index, index += size))

  return result
}

function chunk () {
  return memoize(_chunk)
}
