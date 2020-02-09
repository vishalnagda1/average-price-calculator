import React from 'react';

class BasicUI extends React.Component {
    state = {
        averagePrice: [0.0]
    }

    handleChange = (index, price = 0.0) => {
        console.log({index});
        console.log({price});
        const averagePrice = [...this.state.averagePrice];
        console.log({averagePrice});
        averagePrice[index] = price;
        this.setState(state => ({averagePrice}));
    }
    
    render() {
        return(
            <div>
                <h1>Average Price : {this.state.averagePrice}</h1>
                <PriceQuantity index="0" handleChange={this.handleChange} />
            </div>
        );
    }
}

class PriceQuantity extends React.Component {
    state = {
        price: 0.0,
        quantity: 0,
        totalPrice: 0.0
    };

    updateTotalPrice = () => {
        this.setState(state => ({totalPrice: state.price * state.quantity}));
        this.setState(state => {
            const totalPrice = state.price * state.quantity;
            this.props.handleChange(this.props.index, totalPrice);
            return {totalPrice};
        })
    }
    
    handlePriceChange = event => {
        const value = event.target.value
        this.setState({price: value || 0.0});
        this.updateTotalPrice();
    }
   
    handleQuantityChange = event => {
        const value = event.target.value
        this.setState({quantity: value || 0});
        this.updateTotalPrice();
    }

    render() {
        return(
            <React.Fragment>
                <input type="number" name="price" placeholder="Price"
                onChange={this.handlePriceChange} />
                <input type="number" name="quantity" placeholder="Quantity"
                onChange={this.handleQuantityChange} />
                <p>{this.state.totalPrice}</p>
            </React.Fragment>
        );
    }
}

export default BasicUI;
