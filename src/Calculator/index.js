import React from 'react';

class BasicUI extends React.Component {
    state = {
        averagePrice: [{totalPrice: 0.0, totalShares: 0}]
    }

    handleChange = (index, totalPrice = 0.0, totalShares = 0) => {
        const averagePrice = [...this.state.averagePrice];
        averagePrice[index]['totalPrice'] = totalPrice;
        averagePrice[index]['totalShares'] = totalShares;
        this.setState(state => ({averagePrice}));
    }

    addRow = () => {
        this.setState(state => {
            const {averagePrice} = state;
            averagePrice.push({totalPrice: 0.0, totalShares: 0});
            return averagePrice;
        });
    }

    removeRow = () => {
        this.setState(state => {
            const {averagePrice} = state;
            averagePrice.pop();
            return averagePrice;
        });
    }
    
    render() {
        const priceQuantityArr = this.state.averagePrice.map((_, index) =>
            <React.Fragment key={index}>
                <PriceQuantity index={index} handleChange={this.handleChange} />
                <br />
            </React.Fragment>
        );

        const removeButton = () => {
            return this.state.averagePrice.length > 1 && <button onClick={this.removeRow}>Remove Row</button>
        }
        const averagePrice = this.state.averagePrice.reduce((acc, cur) => {
            const totalPrice = acc.totalPrice + cur.totalPrice || 0.0;
            const totalShares = acc.totalShares + cur.totalShares || 0;
            return {totalPrice, totalShares};
        });
        const {totalPrice, totalShares} = averagePrice;
        return(
            <div>
                <h1>Total Amount : {totalPrice}</h1>
                <h1>Total Shares : {totalShares}</h1>
                <h1>Average Price : {totalPrice / totalShares || 0.0}</h1>
                {priceQuantityArr.map(priceQuantity => priceQuantity)}
                <button onClick={this.addRow}>Add Row</button>
                {removeButton()}
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
            this.props.handleChange(this.props.index, totalPrice, state.quantity);
            return {totalPrice};
        })
    }
    
    handlePriceChange = event => {
        const value = event.target.value
        this.setState({price: value || 0.0});
        this.updateTotalPrice();
    }
   
    handleQuantityChange = event => {
        const value = parseInt(event.target.value, 0)
        this.setState({quantity: value});
        this.updateTotalPrice();
    }

    render() {
        return(
            <React.Fragment>
                <input type="number" name="price" placeholder="Price"
                onChange={this.handlePriceChange} />{' * '}
                <input type="number" name="quantity" placeholder="Quantity"
                onChange={this.handleQuantityChange} />
                {` = ${this.state.totalPrice}`}
            </React.Fragment>
        );
    }
}

export default BasicUI;
