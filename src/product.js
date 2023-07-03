// Product data
const products = [
  { id: 1, name: 'Impact you', price: 10, image: 'product1.jpg' },
  { id: 2, name: 'Pencil boy', price: 20, image: 'product2.jpg' },
  { id: 3, name: 'Casual White', price: 30, image: 'product3.jpg' },
  { id: 4, name: 'Good Time', price: 40, image: 'product4.jpg' },
  { id: 5, name: 'Fine Cotton', price: 50, image: 'product5.jpg' },
  { id: 6, name: 'Man in White', price: 60, image: 'product6.jpg' }
];


function renderProducts() {
  const itemList = document.getElementById('item-list');
  itemList.innerHTML = '';

  for (const product of products) {
    const item = document.createElement('div');
    item.className = 'flex flex-col items-center justify-center';
    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-36 h-38 mb-2">
      <h3 class="text-lg font-semibold">${product.name}</h3>
      <p class="mb-2">$${product.price}</p>
      <button class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 mt-2 add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
    `;
    itemList.appendChild(item);
  }
}


document.addEventListener('click', function(event) {
  if (event.target.classList.contains('add-to-cart-btn')) {
    const productId = parseInt(event.target.getAttribute('data-product-id'));
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.addItem(product);
    }
  }
});

renderProducts();
