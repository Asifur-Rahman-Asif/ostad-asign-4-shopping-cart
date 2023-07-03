
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('increase-quantity-btn')) {
    const productId = parseInt(event.target.getAttribute('data-product-id'));
    cart.increaseQuantity(productId);
  }
});

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('decrease-quantity-btn')) {
    const productId = parseInt(event.target.getAttribute('data-product-id'));
    cart.decreaseQuantity(productId);
  }
});


document.addEventListener('click', function(event) {
  if (event.target.classList.contains('remove-item-btn')) {
    const productId = parseInt(event.target.getAttribute('data-product-id'));
    cart.removeItem(productId);
  }
});
