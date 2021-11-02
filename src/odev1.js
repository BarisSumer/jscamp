let sayi1=10
console.log(sayi1);

let student={id:1, name:"Engin"}

function save(ogrenci,puan=10) {
    console.log(ogrenci.name + " : " + puan)
} 

save(student,70)

let students = ["Engin Demiroğ","Halit Kalaycı","Büşra"]

console.log(students)

let students2= [student,{id:2,name:"Halit"}]

console.log(students2)


// rest 
let showProducts= function (id,...products) {
    console.log(id)
    console.log(products)
}

showProducts(10,"Elma","Armut","Karpuz")

// spread
let points=[1,5,7,3,7,5,60]
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//destructuring
let populations=[10000,20000,30000]
let[small,medium,high] = populations
console.log(small)
console.log(medium)
console.log(high)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

let category={id:1,name:"içecek"}
console.log(category.id)
console.log(category.name)

let{id,name}=category
console.log(id)
console.log(name)

class Customer{
    constructor(id,customerNumber){
        this.id=id
        this.customerNumber=customerNumber
    }
}

let customer=new Customer(1,"12345");
//prototyping
customer.name="Murat Kurtboğan"
console.log(customer.name)

console.log(customer.customerNumber)


class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName=firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}