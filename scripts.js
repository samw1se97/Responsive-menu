"use strict";

/**
 * 
 * 
 */
const omellet = {
  name: "Omellet",
  price: "11.00$",
  pic: "pics/omelet-dish.jpg",
  detail:
    "Some quick example text to build on the card title and make up the bulk of thecard's content.",
};
const lasagna = {
  name: "Lasanga",
  price: "13.00$",
  pic: "./pics/lasagna-dish.jpg",
  detail:
    "Some quick example text to build on the card title and make up the bulk of thecard's content.",
};
const pasta = {
  name: "Pasta",
  price: "14.00$",
  pic: "./pics/pasta-dish.jpg",
  detail:
    "Some quick example text to build on the card title and make up the bulk of thecard's content.",
};
const pizza = {
  name: "Pizza",
  price: "16.00$",
  pic: "./pics/pizza-dish.jpg",
  detail:
    "Some quick example text to build on the card title and make up the bulk of thecard's content.",
};
const salad = {
  name: "Salad",
  price: "4.00$",
  pic: "./pics/salad-dish.jpg",
  detail:
    "Some quick example text to build on the card title and make up the bulk of thecard's content.",
};
const garlicBread = {
  name: "Garlic bread",
  price: "6.00$",
  pic: "./pics/garlic-bread-dish.jpg",
  detail:
    "Some quick example text to build on the card title and make up the bulk of thecard's content.",
};
const bruschetta = {
  name: "Bruschetta",
  price: "12.00$",
  pic: "./pics/bruschetta-dish.jpg",
  detail:
    "Some quick example text to build on the card title and make up the bulk of thecard's content.",
};

/* 
dishArr = A array with al dishes, will be used to display the dishes on the DOM 
*/
const dishArr = [
  omellet,
  lasagna,
  pasta,
  pizza,
  salad,
  garlicBread,
  bruschetta,
];
// ==================================================================
/**
 * card and cardBody, are the two DOM elements.
 * card     = The DOM element representing the dish.
 * cardBody = The DOM element representing the diss Name,
           Price, and the dish detail

*/
const card = document.querySelectorAll(".card");
const cardBody = document.querySelectorAll(".card-body");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeBtn = document.getElementById("close-btn");

/*
displayDishes = dispalys al dishes ont the DOM   
*/
const displayDishes = function () {
  for (const [i, dish] of cardBody.entries()) {
    if (dish.className.includes(i.toString())) {
      card[i].querySelector("img").src = dishArr[i].pic;
      dish.querySelector("h3").innerHTML = dishArr[i].name;
      dish.querySelector("p.price").innerHTML = dishArr[i].price;
      dish.querySelector(".card-text").innerHTML = dishArr[i].detail;
    }
  }
};
window.addEventListener("onload", displayDishes());

/*-- hiding the modal as default --*/
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
window.addEventListener("onload", closeModal());

/*-- close modal when 'close' button is clicked --*/
closeBtn.addEventListener("click", closeModal);

/*-- close modal when 'overlay' is clicked --*/
overlay.addEventListener("click", closeModal);

/**
 * Event listener opens the modal with dish details
   when chosen dish is clicked
 * @param modalImg - DOM element <img>,
 * @param modalHeader - DOM element <h3> h3.card-header,
 * @param modalPrice - DOM element <p> p.price,
 * @param modalDetail - DOM element <p> p.card-text
*/
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function () {
    const modalImg = card[i].querySelector("img").src;
    const modalHeader = card[i].querySelector("h3.card-header").innerHTML;
    const modalPrice = card[i].querySelector("p.price").innerHTML;
    const modalDetail = card[i].querySelector("p.card-text").innerHTML;

    // 
    modal.querySelector("img").src = `${modalImg}`;
    modal.querySelector(".modal-header").innerHTML = modalHeader;
    modal.querySelector(".modal-price").innerHTML = modalPrice;
    modal.querySelector(".dish-details").innerHTML = modalDetail;

    // function that opens the modal
    (function () {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    })();
  });
}
