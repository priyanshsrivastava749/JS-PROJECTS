let disval = "";
document.querySelector("#btn1").addEventListener(
  "click",function (){
    disval += "1";
    document.querySelector("#display").value = disval;
  }
);
document.querySelector("#btnAC").addEventListener(
  "click", function () {
    disval = "";
    document.querySelector("#display").value = disval;
  }
);
document.querySelector("#btnDEL").addEventListener("click", function () {
  disval = disval.slice(0, -1);
  document.querySelector("#display").value = disval;
});
document.querySelector("#btnperscent").addEventListener(
  "click", function () {
    disval += "%";
    document.querySelector("#display").value = disval;
  }
);


document.querySelector("#btn7").addEventListener("click", function () {
  disval += "7";
  document.querySelector("#display").value = disval;
});
document.querySelector("#btn8").addEventListener("click", function () {
  disval += "8";
  document.querySelector("#display").value = disval;
});
document.querySelector("#btn9").addEventListener("click", function () {
  disval += "9";
  document.querySelector("#display").value = disval;
});
document.querySelector("#btnmultiply").addEventListener("click", function () {
  disval += "*";
  document.querySelector("#display").value = disval;
});


document.querySelector("#btn4").addEventListener("click", function () {
  disval += "4";
  document.querySelector("#display").value = disval;
});
document.querySelector("#btn5").addEventListener("click", function () {
  disval += "5";
  document.querySelector("#display").value = disval;
});
document.querySelector("#btn6").addEventListener("click", function () {
  disval += "6";
  document.querySelector("#display").value = disval;
});
document.querySelector("#btnminus").addEventListener("click", function () {
  disval += "-";
  document.querySelector("#display").value = disval;
});




document.querySelector("#btndivide").addEventListener("click", function () {
  disval += "/";
  document.querySelector("#display").value = disval;
});
document.querySelector("#btn2").addEventListener("click", function () {
  disval += "2";
  document.querySelector("#display").value = disval;
});
document.querySelector("#btn3").addEventListener("click", function () {
  disval += "3";
  document.querySelector("#display").value = disval;
});
document.querySelector("#btnadd").addEventListener("click", function () {
  disval += "+";
  document.querySelector("#display").value = disval;
});


document.querySelector("#btn00").addEventListener("click", function () {
  disval += "00";
  document.querySelector("#display").value = disval;
});
document.querySelector("#btn0").addEventListener("click", function () {
  disval += "0";
  document.querySelector("#display").value = disval;
});
document.querySelector("#btndot").addEventListener("click", function () {
  disval += ".";
  document.querySelector("#display").value = disval;
});
document.querySelector("#equalto").addEventListener("click", function () {
  let result = eval(disval);
  disval = result;
  document.querySelector("#display").value = disval;
});