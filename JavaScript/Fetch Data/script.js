
const API_URL = 'https://dummyjson.com/products';
const container = document.getElementById('product-container');
const loader = document.getElementById('loader');
const searchBox = document.getElementById('searchBox');

async function fetchProducts() {
    try {
        loader.style.display = 'block';
        const response = await fetch(API_URL);
        const { products } = await response.json();
        loader.style.display = 'none';
        return products;
    } catch (error) {
        console.error('Error:', error);
        loader.style.display = 'none';
        container.innerHTML = '<p style="color:red; text-align:center;">Error loading products.</p>';
        return [];
    }
}

function createCard(product) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}">
        <div class="card-content">
          <h2>${product.title}</h2>
          <p><strong>Price:</strong> $${product.price}</p>
          <p>${product.description.substring(0, 80)}...</p>
        </div>
      `;
    return card;
}

function renderProducts(products) {
    container.innerHTML = '';
    if (products.length === 0) {
        container.innerHTML = '<p style="text-align:center;">No products found.</p>';
        return;
    }

    products.forEach((product, index) => {
        const card = createCard(product);
        card.style.animationDelay = `${index * 100}ms`;
        container.appendChild(card);
    });
}

searchBox.addEventListener('input', async (e) => {
    const query = e.target.value.toLowerCase();
    const allProducts = await fetchProducts();
    const filtered = allProducts.filter(p => p.title.toLowerCase().includes(query));
    renderProducts(filtered);
});

(async function init() {
    const products = await fetchProducts();
    renderProducts(products);
})();
