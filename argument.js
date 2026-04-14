function add(a,b){
    console.log(arguments)
    const params=[...arguments]
    console.log(params)
}
add(10,50,41,5,26,85)