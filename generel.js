// fetche
fetch("https://kea-alt-del.dk/t7/api/products")
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
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector(".overlay").textContent = product.productdisplayname;
  copy.querySelector(".semere").href = `produkt.html?id=${product.id}`;
  if (product.discount > 0) {
    //produktet er har rabat
    copy.querySelector(".badge").classList.add("discount-badge");
    copy.querySelector(".procent").textContent = product.discount;
  } else {
    copy.querySelector(".badge").remove();
  }

  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector(".soldout").classList.add("soldout-badge");
  } else {
    copy.querySelector(".soldout").remove();
  }
  copy.querySelector("span").textContent = product.price;
  //   copy.querySelector("discount-badge").textContent = product.discount;
  const parent = document.querySelector(".product_item");
  parent.appendChild(copy);
}
