// undefined=> not  define
let money;
console.log(money)


function total(a,b){
    console.log('value of parameter',a,b)
    const sum=a+b;
    console.log('Total is', sum)
}
// total(2)
const result=total(2,3)
// console.log("Vale of funtion call",result)

function total2(a,b){
    console.log('value of parameter',a,b)
    if(a===undefined || b===undefined){
        return;
    }
    if(a&&b){
        const sum=a+b;
        return  sum;
    }
   
}

const result2=total2()
// console.log("value od result2",result2)

const phone={brand:'samsung',price:25000}
// console.log(phone.price)


const banks=['sonali','ropali','jomuna']
// console.log(banks[4])
delete banks[1]
console.log(banks[1])
console.log('type of undefined',typeof undefined)
console.log("type of null", typeof null)