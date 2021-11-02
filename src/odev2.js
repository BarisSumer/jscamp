function findPrime(...numbers) {
    for (let index = 0; index < numbers.length; index++) {
        let counter = 0
        for(let j = 2;j < numbers[index]; j++){
            if(numbers[index] % j == 0){
                counter=1
                break
            }
        }
        if(counter==0){
            console.log(numbers[index]+ " Prime")
        }
        else{
            console.log(numbers[index]+ " Not prime")
        }    
    }
}



function friendNumber(number1,number2) {
    let total1=0,total2=0
    for(let i=0; i<number1; i++){
        if(number1%i==0){
            total1+=i
        }     
    }

    for(let i=0; i<number2; i++){
        if(number2%i==0){
            total2+=i
        }   
    }
    if(total1==number2 && total2==number1){
        
        console.log("friend numbers")
    }
    else{
        console.log("not friend numbers")
    }      
}




function listPerfectNumber() {
   for(let i=1; i<1000; i++){
       let sum=0
       for(let j=1; j<i; j++){
           if(i%j==0){
               sum+=j;
           }
       }
       if(sum==i){
           console.log(i)
       }
   }
}



 function listPrime() {
    let counter=0
       for(let i=2; i<=1000; i++){
        for(let j=2; j<i; j++){
          if(i%j==0){
              counter=1
              break
          }
        }
        if(counter==0){
            console.log(i)
        }
        counter=0
    }
}



findPrime(2,3,6,8,9)
friendNumber(220,284)
friendNumber(1184,1210)
friendNumber(20,50)
listPerfectNumber()
listPrime()





