const items= [
    {id:1, name:"Apple", price:40, qty:3, status:"pending"},
    {id:2, name:"Banana", price:30, qty:5, status:"pending"},
    {id:3, name:"Orange", price:80, qty:2, status:"pending"}
];

const updatedItems= items.map(item=>({
    ...item, 
    price: item.price+5,
    status: "completed",
    total: (item.price+5)* item.qty
}));

const filteredItems = updatedItems.filter(item => item.qty > 2).map(item => {
    console.log(`Name: ${item.name}, Price: ${item.price}, Qty: ${item.qty}, Total: ${item.total}`);
  });