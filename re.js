let d = localStorage.getItem("test1");
let g = JSON.parse(d);
console.log(g);
let c = 0;
let s = 0;
let goodsname = document.querySelector(".goodsname");
let prices = document.querySelector(".price");
let order = document.querySelector(".your-order");
let big = document.querySelector(".big");
let count = document.querySelector(".allcount-block");
let array = [];

let all = document.createElement("div");
let delivery = document.createElement("div");
let allMoney = document.createElement("p");
let discount = document.createElement("p");
let money = document.createElement("p");
let deliverynum = document.createElement("p");
let allCash = document.createElement("p");
let cash = document.createElement("p");
g.filter((i, index) => {
  let goodsimg = document.createElement("div");
  let img = document.createElement("img");
  let order1 = document.createElement("ul");
  let names = document.createElement("div");
  let val = document.createElement("div");
  let big = document.createElement("div");
  let adrev = document.createElement("div");
  let plus = document.createElement("span");
  let num = document.createElement("span");
  let minus = document.createElement("span");

  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  let p5 = document.createElement("p");
  let p6 = document.createElement("p");

  let p1_1 = document.createElement("p");
  let p2_2 = document.createElement("p");
  // let p3_3 = document.createElement('p')
  let p4_4 = document.createElement("p");
  let p5_5 = document.createElement("p");
  let p6_6 = document.createElement("p");

  order.prepend(order1);
  order1.append(goodsimg);
  order1.classList.add("order1");
  order1.append(big);
  goodsimg.append(img);
  big.append(names);
  big.append(val);
  names.append(p1);
  names.append(p2);
  names.append(p3);
  names.append(p4);
  names.append(p5);
  names.append(p6);
  val.append(p1_1);
  val.append(p2_2);
  val.append(adrev);
  val.append(p4_4);
  val.append(p5_5);
  val.append(p6_6);
  adrev.append(minus);
  adrev.append(num);
  adrev.append(plus);

  goodsimg.classList.add("goodsimg");
  img.classList.add("img");
  big.classList.add("big");
  p2_2.classList.add("price");
  plus.classList.add("plus");
  num.classList.add("num");
  minus.classList.add("minus");
  p4_4.classList.add("deliv");
  p5_5.classList.add("salle");
  p6_6.classList.add("summ");
  img.src = i.img;
  p1.innerHTML = "Названые товара";
  p2.innerHTML = "Стоимость:";
  p3.innerHTML = "Количество:";
  p5.innerHTML = "Скидка:";
  p6.innerHTML = "ИТОГО:";

  p1_1.innerHTML = i.name;
  p2_2.innerHTML = i.price;
  minus.innerHTML = "-";
  num.innerHTML = i.count;
  plus.innerHTML = "+";
  p5_5.innerHTML = "100";

  let min = document.querySelector(".minus");
  let numm = document.querySelector(".num");
  let pluss = document.querySelector(".plus");
  let salle = document.querySelector(".salle");
  let su = document.querySelector(".summ");
  let price = document.querySelector(".price");

  let sum = () => {
    let n = +numm.innerHTML;
    let s = +price.innerHTML * +n;
    let res = s + -+salle.innerHTML;
    return res;
  };

  let sale = () => {
    let bb = +numm.innerHTML * 100;
    return bb;
  };

  su.innerHTML = `${sum()}`;
  // array.push(+su.innerHTML)
  // console.log(array);

  pluss?.addEventListener("click", (e) => {
    suw = 0;
    e.preventDefault();
    numm.innerHTML++;
    salle.innerHTML = `${sale()}`;
    su.innerHTML = `${sum()}`;
    calcSum();
    calcAllCash();
  });

  min?.addEventListener("click", () => {
    suw = 0;
    if (numm.innerHTML > 1) {
      numm.innerHTML--;
      salle.innerHTML = `${sale()}`;
      su.innerHTML = `${sum()}`;
      calcSum();
      calcAllCash();
    }
  });
  array.push(+su.innerHTML);
});
function pix(num) {
  console.log(num);
  console.log(array);
  array.map((i) => {
    suw += i;
  });
  console.log(suw);
  return suw;
}
console.log(array);
// let l = c + 300
// console.log(l);

// let all = document.createElement('div')
// let delivery = document.createElement('div')
// let allMoney = document.createElement('p')
// let discount = document.createElement('p')
// let money = document.createElement('p')
// let deliverynum = document.createElement('p')
// let allCash = document.createElement('p')
// let cash = document.createElement('p')

count.append(all);
count.append(delivery);
all.append(allMoney);
all.append(discount);
all.append(allCash);
delivery.append(money);
delivery.append(deliverynum);
delivery.append(cash);

function calcSum() {
  const summs = document.querySelectorAll("p.summ");

  let sum = 0;
  summs.forEach((summ) => (sum += +summ.innerHTML));

  console.log(sum);
  money.innerHTML = sum;
}
calcSum();

function calcAllCash() {
  sum = +money.innerHTML + 300;
  cash.innerHTML = sum;
}

calcAllCash();

allMoney.innerHTML = "ИТОГО:";
discount.innerHTML = "Доставка:";

deliverynum.innerHTML = "300";
allCash.innerHTML = "Обшая сумма";

// cash.innerHTML = l
