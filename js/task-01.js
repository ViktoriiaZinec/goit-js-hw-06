const allItems = document.querySelectorAll(".item");
console.log(allItems);
console.log(`Number of categories: ${allItems.length}`);

allItems.forEach((el) => {
  let category = el.firstElementChild.textContent;
  let amountOfEl = el.lastElementChild.children.length;
  console.log(`Category: ${category}
Elements: ${amountOfEl}`);
});
