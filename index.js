// [X] Create structure of the page
// [X] Style the page
// [] Dyanmically grab the content of the menu from the
// [] Enable the ability for a user to add items to their cart
// [] Enable the ability for a user to remove items from their cart
// [] Enable the ability for a user to complete their order

import { menuArray } from "./data.js";
const menu = document.getElementById("menu");
const cart = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");
const completeOrder = document.getElementById("complete-order");

let itemQuantity = 0;

function getMenuHtml() {
    let menuHtml = ``;
    menuArray.forEach(function (item) {
        menuHtml += `
        <div class="menu-item">
            <div class="menu-item-emoji">${item.emoji}</div>
            <div class="menu-item-description">
                <h2>${item.name}</h2>
                <p>${item.ingredients.join(", ")}</p>
                <h3>$${item.price}</h3>
            </div>
            <button class="menu-item-add" data-id="${item.id}">+</button>
        </div>`;
    });
    return menuHtml;
}

function createCartSection(id) {
    let cartHTML = `
         <hr id="total-order"/>
         <div class="total">
            <h3>Total price:</h3>
            <h3>$${menuArray[id].price}</h3>
         </div>
         <div class="confirmation-button">
            <button class="complete-order">Complete Order</button>
         </div>`;
    return cartHTML;
}

function addItem(id) {
    let item = `
        <div class="item-name">${menuArray[id].name}</div
        <div>$${menuArray[id].price}</div>
        `;
    return item;
}

function callPayment() {
    return '<div id="item"><div>';
}

menu.innerHTML = getMenuHtml();

menu.addEventListener("click", function (e) {
    if (e.target.dataset.id) {
        const id = e.target.dataset.id;
        cartItems.innerHTML = addItem(id);
        cart.innerHTML = createCartSection(id);
        if (id == 0) {
            itemQuantity += 1;
            console.log(itemQuantity);
        } else if (id == 1) {
            itemQuantity += 1;
            console.log(itemQuantity);
        } else if (id == 2) {
            itemQuantity += 1;
            console.log(itemQuantity);
        }
        // localStorage.setItem(menuArray[id].name, itemQuantity);
        // console.log(menuArray[id].name);
    }
});

// add item to cart
// update cart total
// update cart html
// update menu html
// update order html
// update order total
