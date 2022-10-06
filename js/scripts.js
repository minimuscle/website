function updateCart(item) {
  if (!localStorage.getItem("cart"))
    localStorage.setItem("cart", JSON.stringify({ items: [], total: 0 }));

  let shoppingCart = localStorage.getItem("cart");
  cart = JSON.parse(shoppingCart);

  cart.items[i];
  alert();
}
