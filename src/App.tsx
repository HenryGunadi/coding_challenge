import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

type product = {
	id: number;
	title: string;
};

function App() {
	const [products, setProducts] = useState<product[]>([]);
	const api = 'https://dummyjson.com/products';

	// fetch dummy product api
	const fetchProductAPI = async () => {
		try {
			const response = await axios.get(api);
			console.log(response.data);

			setProducts(response.data.products);
		} catch (err) {
			console.log('Error fetching data : ', err);
		}
	};

	useEffect(() => {
		fetchProductAPI();
	}, []);

	useEffect(() => {
		console.log(products);
	}, [products]);

	return (
		<div className="py-12 mx-12">
			<table className="border-collapse mx-auto border border-black w-[50vw] h-screen justify-center items-center">
				{/* columns */}
				<thead className="">
					<tr>
						<th className="bg-slate-300 font-semibold px-6 py-3 text-base text-center border border-black">Product-ID</th>
						<th className="bg-slate-300 font-semibold px-6 py-3 text-base text-center border border-black">Product-Name</th>
					</tr>
				</thead>

				{/* rows */}
				<tbody className="">
					{products.length != 0 &&
						products.map((product: product, index) => (
							<tr key={index} className="border border-black">
								<td className="border border-black py-2 px-2 text-center">{product.id}</td>
								<td className="border border-black py-2 px-2 text-center">{product.title}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
