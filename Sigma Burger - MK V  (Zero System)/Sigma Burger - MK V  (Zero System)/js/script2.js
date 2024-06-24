//toggle (menu) Class Active
const navbarNav2 = document.querySelector(".navbar-nav2");
const cart = document.querySelector(".shopping-cart");

//Klik Menu (menu)
document.querySelector("#menu2").onclick = () => {
  navbarNav2.classList.toggle("active");
};

document.querySelector("#shop-cart-button").onclick = () => {
  cart.classList.toggle("active");
};

// Close Nav Jika Klik di Luar
const menu = document.querySelector("#menu2");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav2.contains(e.target)) {
    navbarNav2.classList.remove("active");
  }
});

const shop = document.querySelector("#shop-cart-button");

document.addEventListener("click", function (e) {
  if (!shop.contains(e.target) && !cart.contains(e.target)) {
    cart.classList.remove("active");
  }
});
