const categoriesList = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);
categoriesList.forEach((category) => {
  const categoryName = category.querySelectorAll("h2").textContent;
  const itemCount = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements count: ${itemCount}`);
});
