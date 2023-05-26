let price = document.querySelector(".price").innerHTML;
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let deliv = document.querySelector(".deliv").innerHTML;
let sum = document.querySelector(".sum").innerHTML;
let sale = document.querySelector(".sale").innerHTML;
let span = document.querySelector(".qu").innerHTML;

plus.addEventListener("click", () => {
  let b = span++;
  span = span++;
  console.log(span++);
});

minus.addEventListener("click", () => {
  if (span > 0) {
    console.log(span--);
  }
});

function su() {
  sale = +span * 100;
  a = +price * +span;
  sum = a + +deliv - +sale;
}

su();
