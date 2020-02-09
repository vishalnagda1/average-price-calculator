import React from 'react';

export default class PriceQuantity extends React.Component {
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
        const removeButton = this.props.removeButton? <button key-id={this.props.index} onClick={this.props.deleteRow}>X</button> : '';
        return(
            <React.Fragment>
                <input type="number" name="price" placeholder="Price"
                onChange={this.handlePriceChange} />{' * '}
                <input type="number" name="quantity" placeholder="Quantity"
                onChange={this.handleQuantityChange} />
                {` = ${this.state.totalPrice.toFixed(2)} `}
                {removeButton}
            </React.Fragment>
        );
    }
}
