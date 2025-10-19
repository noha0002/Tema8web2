//const params = new URLSearchParams(window.location.search);
//const category = params.get("category");

const kategorier = document.querySelector(".flexbox-productlist");

if (kategorier) {
  
  kategorier.innerHTML = `
    <section class="flexbox-productlist">
      <div class="box1">
        <p>See our selection of:</p>
        <a href="beauty.html?category=beauty"><h2>BEAUTY</h2></a>
      </div>

      <div class="box2">
        <p>See our selection of:</p>
        <a href="beauty.html?category=fragrances"><h2>FRAGRANCE</h2></a>
      </div>

      <div class="box1">
        <p>See our selection of:</p>
        <a href="beauty.html?category=skin-care"><h2>SKIN CARE</h2></a>
      </div>
    </section>
  `;
}
        
