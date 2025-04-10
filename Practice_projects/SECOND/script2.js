let disval = "";
let arr = [
  "btn1",
  "btn2",
  "btn3",
  "btn4",
  "btn5",
  "btn6",
  "btn7",
  "btn8",
  "btn9",
  "btn0",
  "btn00",
  "btnadd",
  "btndot",
  "btnminus",
  "btnperscent",
  "btndivide",
  "btnmultiply",
];
for (let i = 0; i < arr.length; i++) {
  let button = document.querySelector(`#${arr[i]}`);
    button.addEventListener("click", function () {
      disval += button.innerText;
      document.querySelector(`#display`).value = disval;
  });
}
document.querySelector("#equalto").addEventListener("click", function () {
  let result = eval(disval);
  disval = result;
  document.querySelector("#display").value = disval;
})
document.querySelector("#btnAC").addEventListener("click", function () {
  disval = "";
  document.querySelector("#display").value = disval;
})

document.querySelector("#btnDEL").addEventListener("click", function () {
  disval = disval.slice(0, -1);
  document.querySelector("#display").value = disval;
});
