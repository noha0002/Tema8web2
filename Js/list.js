const productlistContainer = document.querySelector('#beauty-main');
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

//console.log(category);

//LISTE

//document.querySelector("h1").textContent = category;

if (!category) {
    document.querySelector("h1").textContent = "No category selected";
  } else {
    document.querySelector("h1").textContent = category.toUpperCase();

const ListContainer = document.querySelector("main");

fetch(`https://dummyjson.com/products/category/${category}`)
.then((response) => response.json())
  .then(data => {
    //console.log(data)
    //allData = data
    showProducts(data.products);
  });
  }

  function showProducts(products) {
    //console.log(products)
    productlistContainer.innerHTML = "";
    products.forEach((element) => {
        //console.log(element);

// Husk at lave discounted label også lav det dynamisk
        productlistContainer.innerHTML += `
        <section class="beauty-flex">
        <div>
          <div class="beauty-border">
            <img src="${element.images[0]}" alt="${element.title}" />

          </div>

          <div>
          <p>${element.brand}</p>
            <p>${element.title}</p>
            <p>DKK ${element.price},-</p>
            <p>Now DKK 11,-</p>
            <a class="beauty-more" href="product.html?id=${element.id}">see more</a>
          </div>
        </div>
      </section>`;
    })

  }