let data;
data=10;
data='';
data=' ';
data='0';
data=false;
data=true;
data=null;
data={};
data=[];
data=false;
data=true;
console.log('value of data',data)

if(data){
    console.log('value of data is truthy')

}
else{
    console.log(data,'value od date is falsy')
}
// use logical not
if(!data){
    console.log('Inside with id a falsy value')
}

// double not
if(!!data=== true){
    console.log('only  with double not')
}