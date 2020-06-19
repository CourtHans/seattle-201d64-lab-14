/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: ***********Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var table = document.getElementById('cart');
  var tableRows = document.getElementsByTagName('tbody');
  for (var i = 0; i < cart.length; i++){
  tableRows.deleteRow(0);
}
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: *******Find the table body
  var table = document.getElementById('cart');
  var tableRows = document.getElementsByTagName('tbody');

  // TODO: *********Iterate over the items in the cart
  for (var i = 0; i < cart.length; i++){
    var tableRow = document.createElement('tr');
    var tableDataLink = document.createElement('td');
    var images = CartItem.filePath
//access cart item #1, pull out the filePath
    var tableDataQuantity = document.createElement('td');
    var itemPicture = 
//access cart item #1, pull out quantity (check variable)
    var tableDataItem = document.createElement('td');
    var itemName = 
//access cart item #2, pull out name
  }

  // TODO: ********Create a TR
  // TODO: ********Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  var deleteItem = document.getElementsById('will figure this out later');
  deleteItem.addEventListener('Delete', cart.removeItem);

  // TODO: Save the cart back to local storage
  var arrayOfItems = JSON.stringify(cart);
  localStorage.clear(); // cleared out localStorage so could refresh with up-to-date items
  localStorage.setItem('stored-cart-info', arrayOfItems);

  // TODO: Re-draw the cart table
  showCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
