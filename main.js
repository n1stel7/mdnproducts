// let products = [
// 	{
// 		"name": "baked beans",
// 		"price": 0.4,
// 		"image": "beans.jpg",
// 		"type": "vegetables"
// 	},
// 	{
// 		"name": "hot dogs",
// 		"price": 1.99,
// 		"image": "hotdogs.jpg",
// 		"type": "meat"
// 	},
// 	{
// 		"name": "spam",
// 		"price": 2.85,
// 		"image": "spam.jpg",
// 		"type": "meat"
// 	},
// 	{
// 		"name": "refried beans",
// 		"price": 0.99,
// 		"image": "refried.jpg",
// 		"type": "vegetables"
// 	},
// 	{
// 		"name": "kidney beans",
// 		"price": 0.58,
// 		"image": "kidney.jpg",
// 		"type": "vegetables"
// 	},
// 	{
// 		"name": "garden peas",
// 		"price": 0.52,
// 		"image": "gardenpeas.jpg",
// 		"type": "vegetables"
// 	},
// 	{
// 		"name": "mushy peas",
// 		"price": 0.58,
// 		"image": "mushypeas.jpg",
// 		"type": "vegetables"
// 	},
// 	{
// 		"name": "corned beef",
// 		"price": 2.39,
// 		"image": "cornedbeef.jpg",
// 		"type": "meat"
// 	},
// 	{
// 		"name": "tomato soup",
// 		"price": 1.4,
// 		"image": "tomatosoup.jpg",
// 		"type": "soup"
// 	},
// 	{
// 		"name": "chopped tomatoes",
// 		"price": 0.45,
// 		"image": "tomato.jpg",
// 		"type": "vegetables"
// 	},
// 	{
// 		"name": "chicken noodle soup",
// 		"price": 1.89,
// 		"image": "chickennoodle.jpg",
// 		"type": "soup"
// 	},
// 	{
// 		"name": "carrot and coriander soup",
// 		"price": 1.49,
// 		"image": "carrotcoriander.jpg",
// 		"type": "soup"
// 	}
// ]

let products = new Array;

fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => {
  		products = json;
    	for (let prod of products) { add(prod) }
  	})
  .catch( err => console.error(`Fetch problem: ${err.message}`) );

const form = document.querySelector("#filter");
const category = document.querySelector("#category");
const filterSubmit = document.querySelector("#filterSubmit");
const productsDiv = document.querySelector("#products-cont");

form.addEventListener("submit", ()=> {
	event.preventDefault();
	productsDiv.innerHTML = "";

	const cat = category.value;
	if (cat == "none") {
		for (let prod of products) {
			add(prod)
		}
		return;
	}
	else {
		for (let prod of products) {
			if (prod.type == cat) {
				add(prod)
			}
		}
	}
})

function add(arg) {
	const div = document.createElement("div");
	div.classList.add("product");
	const title = document.createElement("span");
		title.classList.add("prodTitle");
		title.textContent = arg.name;
	const img = document.createElement("img");
		img.classList.add("prodImg");
		img.src = `images/${arg.image}`;
	const price = document.createElement("span");
		price.classList.add("prodPrice");
		price.textContent = `${arg.price}$`;
	div.append(title, img, price);
	productsDiv.appendChild(div)
}


