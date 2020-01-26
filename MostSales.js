var products = ["Computer", "Cell Phones", "Vacuum Cleaner"];
var amounts = [3, 24, 8];
var prices = [199, 299, 399];

function top3(products, amounts, prices) {
  for (let i = 0; i < products.length; i++) {
    let highest = '';
    let value = amounts[i] * prices[i];
    console.log(`${products[i]} ${value}`);
  }
}