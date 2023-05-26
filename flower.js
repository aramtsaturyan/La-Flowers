let clk = document.querySelector(".menu-line")
let bas = document.querySelector(".menu-basic")

function * GenId() {
  let num = 1
  while(true) {
    yield num++
  }
}

const genId = GenId()

clk.addEventListener('click', () =>{
    bas.classList.toggle("active")
})






// import {recycle} from "./basket.js"

// recycle()




// let basket = document.querySelectorAll('.basket')
let sale = document.querySelectorAll('.sale')
let recycle = document.querySelector('.recycle')
let qanak = document.querySelector('.qanak')


let arr = JSON.parse(localStorage.getItem("test1")) || []

let a 
sale.forEach((val) =>{
  const i = val.querySelector("input")
  const title = val.querySelector("h3").innerHTML
  const price = val.querySelectorAll(".price")
  const imgSrc = val.querySelector("img").src

  let lastPrice
  
  price.forEach((p) =>{
   lastPrice = +p.innerHTML; 
  });
  const id = genId.next().value
  const obj = {
    id,
    name: title,
    price: lastPrice,
    img: imgSrc,
    count: 0
  }


  i.addEventListener('click', () =>{
    qanak.innerHTML++;
    const find = arr.findIndex((val) => val.id === id)
    
    if(find != -1) {
      arr[find].count++
      a = JSON.stringify(arr)
      localStorage.setItem("test1", a)
      return
    }
    obj.count++
    arr.push(obj)
    a = JSON.stringify(arr)
    localStorage.setItem("test1", a)
  });

})




    
