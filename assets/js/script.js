
// 
const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");
const quantityInput = document.querySelector("#quantity");

incrementButton.addEventListener("click", () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
});
decrementButton.addEventListener("click", () => {
  quantityInput.value = parseInt(quantityInput.value) - 1;
});