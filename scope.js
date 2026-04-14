const name='Tasnim'

if(true){
    const data=58;
    console.log("Inside the if block",data,name)
    doMath(44,55)

}
// console.log(data)

// while(true){

// }

for(const num of[1,2,3,4,5,6]){

}
// function scope or local scope
function doMath(a,b){
    console.log(a,b)
    const sum=a+b;
    const total=sum+10;
    function doubleIt(x){
        return x*2;
    }
    console.log(doubleIt(5))


}
// console.log(a,b)