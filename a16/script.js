const items= [
    {id:1, name:"Apple", price:40},
    {id:2, name:"Banana", price:30},
    {id:3, name:"Orange", price:80}
];

const cart={1:7, 3:5}

items.map((value) =>
  cart[value.id] &&
    console.log(
      value.id,
      value.name,
      value.price,
      cart[value.id],
      value.price * cart[value.id]
    )
);