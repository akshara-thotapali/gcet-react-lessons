import "./App2.css";

export default function App2() {
  const products = [
    { id: 1, name: "Product 1", price: 23 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 45 },
  ];

  return (
    <div>
      <h1>This is App2 component</h1>
      <h2>Working with Arrays and Objects, Applying Styles</h2>
      <div className="App-Product-Container">
        {products.map((value) => (
          <div key={value.id} className="App-Product-Box">
            <h2>{value.name}</h2>
            <h3>₹{value.price}</h3>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
