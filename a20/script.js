
function add(...values) {
  const orderValue = values.reduce((totalSum, item) => {
    const qty = cart[item.id];
    if (qty) {
      const total = item.price * qty;
      console.log(`Name: ${item.name}, Price: ${item.price}, Qty: ${qty}, Total: ${total}`);
      return totalSum + total;
    }
    return totalSum;
  }, 0);

  console.log("Order Value:", orderValue);
}

const items = [
  { id: 1, name: "p1", price: 40 },
  { id: 2, name: "p2", price: 30 },
  { id: 3, name: "p3", price: 80 }
];

const cart = { 1: 4, 3: 5 };

add(...items); 
