const products = [
{id: 1, name: "Product 1", price: 100},
{id: 2, name: "Product 2", price: 200},      
{id: 3, name: "Product 3", price: 300}
];


const updatedProducts = products.map(product => ({
    id: product.id,
    name: product.name,
    price: product.price + 5,
}));
updatedProducts.forEach(product =>  console.log(product.name+" "+product.price));