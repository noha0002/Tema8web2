const produktMain = document.querySelector('#produktMain');

const params = new URLSearchParams(window.location.search);
const id = params.get("id") || 1;
const category = params.get("category");

//console.log(id);

fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(data => showProduct(data));

// Husk at tilføje "category" til url'en, så den ikke kun står på beauty, men ændrer sig efter kategori

//console.log(category);
    

function showProduct(product) {
    //console.log(product);

    produktMain.innerHTML += `<section class="Product-grid">
        <img src="${product.images}" alt="${product.title}" />

        <div class="product-info">
          <h1>${product.title}</h1>
          <p class="rate">rating: ${product.rating}</p>
          <p class="price">${product.price} DKK</p>
          <p class="info">${product.description}.</p>
          <div class="product-box">
            <p>ADD TO CART</p>
          </div>
          <hr />

          <div class="product-details">
            <p>${product.returnPolicy}</p>
            <div class="details-gold">
              <p>Weight: ${product.weight}</p>
              <p>Dimensions: Width: ${product.dimensions.width}, Height: ${product.dimensions.height}, Depth: ${product.dimensions.depth}</p>
            </div>
            <p class="month">${product.warrantyInformation}| ${product.shippingInformation}</p>
          </div>
        </div>
      </section>`;
};