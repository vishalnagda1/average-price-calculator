import React from 'react';

function BasicUI () {
    return(
        <div>
            <PriceQuantity />
        </div>
    );
}

class PriceQuantity extends React.Component {
    state = {
        price: 0.0,
        quantity: 0,
        averagePrice: 0.0
    };
    
    handlePriceChange = event => {
        const value = event.target.value
        this.setState({price: value || 0.0});
    }
   
    handleQuantityChange = event => {
        const value = event.target.value
        this.setState({quantity: value || 0});
    }

    render() {
        const {price, quantity} = this.state;
        return(
            <React.Fragment>
                <input type="number" name="price" placeholder="Price"
                onChange={this.handlePriceChange} />
                <input type="number" name="quantity" placeholder="Quantity"
                onChange={this.handleQuantityChange} />
                <p>{price * quantity}</p>
            </React.Fragment>
        );
    }
}

export default BasicUI;
