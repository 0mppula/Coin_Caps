import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CryptoTable from './components/CryptoTable';

function App() {
	const [cryptos, setCryptos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filteredCryptos, setFileredCryptos] = useState([]);

	useEffect(() => {
		const getCryptoData = async () => {
			setLoading(true);
			const url =
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h%2C7d';
			const response = await fetch(url);
			const data = await response.json();
			setCryptos(data);
			setFileredCryptos(data);
			setLoading(false);
		};

		getCryptoData();
	}, []);

	return (
		<div>
			<SearchBar cryptos={cryptos} setFileredCryptos={setFileredCryptos} />
			<CryptoTable filteredCryptos={filteredCryptos} />
		</div>
	);
}

export default App;
