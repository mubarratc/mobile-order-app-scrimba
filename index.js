// [] Create structure of the page
// [] Style the page
// [] Dyanmically grab the content of the menu from the
// [] Enable the ability for a user to add items to their cart
// [] Enable the ability for a user to remove items from their cart
// [] Enable the ability for a user to complete their order

import { menuArray } from "./data.js";
const menu = document.getElementById("menu");

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

        let cartItem = document.querySelector(`[data-id="${item.id}"]`);
        console.log(cartItem);
    });
    return menuHtml;
}

menu.innerHTML = getMenuHtml();

// add item to cart
// update cart total
// update cart html
// update menu html
// update order html
// update order total
