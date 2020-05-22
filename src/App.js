import React, { Component } from 'react'
import CurrencyConverter from './Components/CurrencyConverter'
import CurrencyDisplay from './Components/CurrencyDisplay'
import './App.css'

class App extends Component {
	render() {
		return (
			<>
				<h2>Render Props</h2>
				<CurrencyConverter
					render={(currencyData, amount) => (
						<CurrencyDisplay currencyData={currencyData} amount={amount} />
					)}
				/>
			</>
		)
	}
}

export default App
