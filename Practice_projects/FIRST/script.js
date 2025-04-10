let count = 0;
document.querySelector(".add-btn").addEventListener("click", () => {
  count++;
  document.querySelector(".items").innerText = `Your cart has ${count} items in it`;
});
document.querySelector(".remove-btn").addEventListener("click",() => {
  if(count>0)count--;
  document.querySelector(".items").innerText = `Your cart has ${count} items in it`;
})
