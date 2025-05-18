function add(...values){
    const total= values.reduce((sum,value)=>sum+value);
    console.log(total);
}

add(5,7,6,9,5)