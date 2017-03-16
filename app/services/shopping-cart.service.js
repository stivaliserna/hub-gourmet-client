/* global angular */

angular
  .module('hubGourmetApp')
  .service('ShoppingCartService', [
    '$log',
    '$rootScope',
    'localStorageService',
    ShoppingCartService
  ])

function ShoppingCartService ($log, $rootScope, localStorageService) {
  let items = localStorageService.get('shoppingCartItems') || []

  $rootScope.$watch(
    () => { return items },
    (newValue) => {
      if (newValue) {
        localStorageService.set('shoppingCartItems', newValue)
      }
    },
    true
  )

  return {
    addItem: addItem,
    removeItem: removeItem,
    count: count,
    getItems: getItems,
    increaseQuantity: increaseQuantity,
    total: total
  }

  function insertItem (product, quantity = 1) {
    items.push({
      product: product,
      quantity: quantity
    })
  }

  function addItem (product, quantity = 1) {
    let item = items.find(item => item.product._id === product._id)

    if (item) {
      increaseQuantity(product, 1)
    } else {
      insertItem(product, quantity)
    }
  }

  function removeItem (product) {
    let index = items.findIndex(i => i.product._id === product._id)
    items.splice(index, 1)
  }

  function getItems () {
    return items.slice()
  }

  function count () {
    return items.reduce((acc, val) => acc + val.quantity, 0)
  }

  function increaseQuantity (product, amount = 1) {
    let index = items.findIndex(i => i.product._id === product._id)
    items[index].quantity += amount
  }

  function total () {
    return items.map(item => item.product.price * item.quantity).reduce((acc, val) => acc + val, 0)
  }
}
