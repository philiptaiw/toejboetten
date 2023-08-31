const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

//https://kea-alt-del.dk/t7/api/products/1552
fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".producttitle h2").textContent = product.productdisplayname;
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector(".category").textContent = product.subcategory;
  document.querySelector(".description").innerHTML = product.description;
  document.querySelector("b").innerHTML = product.styledesc;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

/*
{
  "id": 1552,
  "gender": "Unisex",
  "category": "Sporting Goods",
  "subcategory": "Sports Equipment",
  "articletype": "Footballs",
  "basecolour": "White",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Sports",
  "productdisplayname": "Power Cat Trainer-R Football",
  "parsed": 1,
  "soldout": 0,
  "relid": 1552,
  "price": 999,
  "discount": 43,
  "variantname": "Power CAT Trainer-WR",
  "brandname": "Puma",
  "brandbio": "PUMA is the World's Fastest Sports Brand",
  "brandimage": "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg",
  "agegroup": "Adults-Unisex",
  "colour1": "Red",
  "colour2": "",
  "fashiontype": "Fashion",
  "materialcaredesc": null,
  "sizefitdesc": null,
  "description": "<table style=\"border-collapse: collapse  width;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r<br/><colgroup><col style=\"width: 270pt;\" width=\"360\"></col> </colgroup> \r<br/><tbody>\r<br/><tr style=\"height: 165pt;\" height=\"220\">\r<br/><td class=\"xl65\" style=\"height: 165pt  width;\" width=\"360\" height=\"220\">1. A   football for soccer games in all weather conditions<br /> 2. puma's hi-tech airlock valve to keep the ball bouncy at 8-12 PSI,   0.6-0.8 bar<br /> 3. Comes in a catchy white, red, black coloured design with puma leaping cat symbol on it<br /> 4. A size 5 football with 19 cm diameter, it comes with a 1 year shape   guarantee<br /> <br /> <br /> All you football fans out there, what are you waiting for? Lets see you   smashing goals out on the field with this Puma Power Cat football.<span>&nbsp; </span></td>\r<br/></tr>\r<br/></tbody>\r<br/></table>",
  "styledesc": null
}
*/
