
const products = [
  { id: 1, name: "p1", price: 40 },
  { id: 2, name: "p2", price: 30 },
  { id: 3, name: "p3", price: 80 }
];

const cart={1:4, 3:5}

const total= products.reduce((sum, value)=>{
    return sum+ value.price*(cart[value.id] ?? 0)
},0)
console.log(total)
