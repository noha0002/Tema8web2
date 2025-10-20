const productlistContainer = document.querySelector('#beauty-main');
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

//console.log(category);

//LISTE

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
        <section class="beauty-flex ${element.discountPercentage && "tilbud"}">
        <div>
          <div class="beauty-border">
            <img src="${element.images[0]}" alt="${element.title}" />

          </div>

          <div>
          <p>${element.brand}</p>
            <p>${element.title}</p>
            <p class="pris">DKK ${element.price},-</p>
            <div class="discounted ${element.discountPercentage > 0 ? '' : 'hidden'}">
            <p class="now">Now DKK <span>${Math.round(element.price*(1 - element.discountPercentage/100))}</span>,-</p>
            <p class="end"><span>-${element.discountPercentage}</span>%</p>
            </div>
            <a class="beauty-more" href="product.html?id=${element.id}">see more</a>
          </div>
        </div>
      </section>`;
    })

  }

//SORTING

let allData = [];
let currentDataSet = [];

fetch(`https://dummyjson.com/products/category/${category}`)
  .then(res => res.json())
  .then(data => {
    allData = data.products;         

    currentDataSet = [...allData];   
    showProducts(currentDataSet); 
  })


document.querySelectorAll(".low-group").forEach(btn => {
  btn.addEventListener("click", showSorted);
});

function showSorted (event) {
    const direction = event.target.dataset.direction;

     if (currentDataSet) {
        if (direction === "hilo") {
            currentDataSet.sort((a, b) => b.price - a.price);
        } else {
            currentDataSet.sort((a, b) => a.price - b.price);
         }
         showProducts(currentDataSet);
     }
}