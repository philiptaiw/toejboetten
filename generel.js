// fetche
fetch("https://kea-alt-del.dk/t7/api/products/")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  // loope
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // clone, ændre, appende
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".overlay").textContent = product.price;
  /* copy.querySelector(".alias").textContent = hero.alias;
  copy.querySelector(".origin").textContent = hero.origin;
  copy.querySelector(".month").textContent = hero.birthday.month;
  copy.querySelector(".day").textContent = hero.birthday.day;*/
  const parent = document.querySelector(".product_item");
  parent.appendChild(copy);
}
