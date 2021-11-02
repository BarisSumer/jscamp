function addToCart(productName="Elma",quantity) {
    console.log("Sepete eklendi: "+productName +" adet : "+quantity);
}

addToCart("Elma")
addToCart("Yumurta",10)
addToCart("Karpuz")
addToCart()

let sayHello = ()=>{
    console.log("hello world!")
}

sayHello()

let sayHello2 = function () {
    console.log("hello world 2")
}
sayHello2()

let product1 = {productName:"Elma",unitPrice:10,quantity:5}

function addToCart2(product) {
    console.log("Ürün: "+product.productName)
    console.log("Adet: "+product.quantity)
    console.log("Fiyat: "+product.unitPrice)
}

addToCart2(product1)

let product2 = {productName:"Elma",unitPrice:10,quantity:5}
let product3 = {productName:"Elma",unitPrice:10,quantity:5}
product2=product3
product2.productName="Karpuz"
console.log(product3.productName)

function addToCart3(products) {
    console.log(products)
}

let products = [
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]

addToCart3(products)

function add(...numbers) { //rest
    let total=0
    for (let index = 0; index < numbers.length; index++) {
        total+=numbers[index]
    }
    console.log(total)
}
add(20,30)
add(20,30,40)

let numbers = [30,10,500,600,120]
console.log(Math.max(...numbers))



let [icAnadolu,marmara,Karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
         ["Ankara","Konya"], 
         ["İstanbul","Bursa"],
         ["Sinop","Trabzon"],
    ]  
]

console.log(marmara)
console.log(icAnadoluSehirleri)


let newproductName,newunitPrice,newquantity
({productName:newproductName,unitPrice:newunitPrice,quantity:newquantity} 
    
   = {productName:"Elma",unitPrice:10,quantity:5})

console.log(newproductName)
