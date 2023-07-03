// Cart
const cart = {
  items: [],


  addItem(item) {
    const existingItem = this.items.find(i => i.product.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ product: item, quantity: 1 });
    }
    this.renderCart();
  },

  
  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.renderCart();
  },

  
  increaseQuantity(productId) {
    const item = this.items.find(i => i.product.id === productId);
    if (item) {
      item.quantity++;
      this.renderCart();
    }
  },

  
  decreaseQuantity(productId) {
    const item = this.items.find(i => i.product.id === productId);
    if (item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.removeItem(productId);
      } else {
        this.renderCart();
      }
    }
  },

  
  renderCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = this.calculateTotalPrice();
    
    cartItems.innerHTML = '';
    
    for (const item of this.items) {
      const cartItem = document.createElement('li');
      cartItem.className = 'flex items-center';
      cartItem.innerHTML = `
        <img src="${item.product.image}" alt="${item.product.name}" class="w-20 h-32 mr-2">
        <div>
          <h3>${item.product.name}</h3>
          <p>$${item.product.price}</p>
          <p>Quantity: ${item.quantity}</p>
          <div class="flex">
            <button class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-1 px-2 mt-2 mr-2 rounded increase-quantity-btn" data-product-id="${item.product.id}">+</button>
            <button class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-1 px-2 mt-2 decrease-quantity-btn" data-product-id="${item.product.id}">-</button>
            <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 mt-2 ml-2 rounded remove-item-btn" data-product-id="${item.product.id}">Remove</button>
          </div>
        </div>
      `;
      cartItems.appendChild(cartItem);
    }
    
    const totalElement = document.createElement('p');
    totalElement.innerHTML = `<strong>Total: $${totalPrice}</strong>`;
    cartItems.appendChild(totalElement);
  },
  
 
  calculateTotalPrice() {
    let total = 0;
    
    for (const item of this.items) {
      total += item.product.price * item.quantity;
    }
    
    return total;
  }
};


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
