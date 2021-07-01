import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const dataset = async () => {
			const { data } = await axios.get("/api/products");
			setProducts(data);
		};
		dataset();
	}, []);
	return (
		<div className="App">
			{products.map((product) => (
				<p key={product._id}>{product.name}</p>
			))}
		</div>
	);
}

export default App;
