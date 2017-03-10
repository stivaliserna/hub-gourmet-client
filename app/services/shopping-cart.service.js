/* global angular */

angular
  .module('hubGourmetApp')
  .service('ShoppingCartService', [
    '$log',
    ShoppingCartService
  ])

function ShoppingCartService ($log) {
  let items = []

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
    let item = items.find(item => item.product.productID === product.productID)

    if (item) {
      increaseQuantity(product, 1)
    } else {
      insertItem(product, quantity)
    }
  }

  function removeItem (product) {
    let index = items.findIndex(i => i.product.productID === product.productID)
    item.splice(index, 1)
  }

  function getItems () {
    return items.slice()
  }

  function count () {
    return items.reduce((acc, val) => acc + val.quantity, 0)
  }

  function increaseQuantity (product, amount = 1) {
    let index = items.findIndex(i => i.product.productID === product.productID)
    items[index].quantity += amount
  }

  function total () {
    return items.map(item => item.product.price * item.quantity).reduce((acc, val) => acc + val, 0)
  }
}
