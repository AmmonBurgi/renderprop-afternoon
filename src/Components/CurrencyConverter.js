import React, { Component } from 'react'

class CurrencyConverter extends Component {
    constructor(){
        super()
        this.state = {
            currencyChosen: false,
            selectedCurrency: 'Select Currency',
            amount: 0
        }
    }
    
    handleAmountIncrease = () => {
        this.setState((prevState) => {
            return {amount: prevState.amount + 1}
        })
    }

    handleAmountDecrease = () => {
        this.setState((prevState) => {
            return {amount: prevState.amount - 1}
        })
    }

    handleOptionSelect = (event) => {
        const userValue = event.target.value
        this.setState(() => {
            return {
                selectedCurrency: userValue,
                currencyChosen: userValue === 'Select Currency' ? false : true
            }
        })

    }

    render(){
        const currencyData = [
            { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
            { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
            { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
            { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
            { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
        ]
        let theMap = currencyData.map((element, index) => {
        return <option key={element.id} value={index}>{element.name}</option>
        })
        return(
            <div>
                <select value={this.state.selectedCurrency} onChange={e => this.handleOptionSelect(e)}>
                    <option value='Select Currency'>Select Currency</option>
                    {theMap}
                </select>
                <div>
                    <button className='add' onClick={this.handleAmountIncrease}>+</button>
                    <button className='minus' onClick={this.handleAmountDecrease}>-</button>
                </div>
				{this.state.currencyChosen ? (
					this.props.render(
						currencyData[this.state.selectedCurrency],
						this.state.amount
					)
				) : (
					<p>Please Select Currency</p>
				)}
            </div>
        )
    }
}
export default CurrencyConverter

