import React from 'react';
import PriceQuantity from './PriceQuantity';

export default class Calculator extends React.Component {
    state = {
        averagePrice: {0: {totalPrice: 0.0, totalShares: 0}},
        keyTracker: 0
    }

    handleChange = (key, totalPrice = 0.0, totalShares = 0) => {
        const {averagePrice} = this.state;
        averagePrice[key].totalPrice = totalPrice;
        averagePrice[key].totalShares = totalShares;
        this.setState(state => ({averagePrice}));
    }

    addRow = () => {
        this.setState(state => {
            let {averagePrice, keyTracker} = state;
            keyTracker += 1;
            averagePrice[keyTracker] = {totalPrice: 0.0, totalShares: 0};
            return {averagePrice, keyTracker};
        });
    }

    deleteRow = event => {
        const key = event.target.getAttribute('key-id');
        this.setState(state => {
            let {averagePrice} = state;
            delete(averagePrice[key]);
            return averagePrice;
        });
    }
    
    render() {
        const averagePriceKeys = Object.keys(this.state.averagePrice);
        const priceQuantityArr = averagePriceKeys.map((key) =>
            <React.Fragment key={key}>
                <PriceQuantity index={key} handleChange={this.handleChange} deleteRow={this.deleteRow}
                removeButton={averagePriceKeys.length > 1} />
                <br />
            </React.Fragment>
        );

        const averagePriceArr = averagePriceKeys.map(key => this.state.averagePrice[key]);
        const averagePrice = averagePriceArr.reduce((acc, cur) => {
            const totalPrice = acc.totalPrice + cur.totalPrice || 0.0;
            const totalShares = acc.totalShares + cur.totalShares || 0;
            return {totalPrice, totalShares};
        });

        const {totalPrice, totalShares} = averagePrice;
        return(
            <div>
                <h1>Total Investment : {(totalPrice).toFixed(2)}</h1>
                <h1>Total Shares : {totalShares}</h1>
                <h1>Average Price : {(totalPrice / totalShares || 0.0).toFixed(2)}</h1>
                {priceQuantityArr.map(priceQuantity => priceQuantity)}
                <br />
                <button onClick={this.addRow}>Add Row</button>
            </div>
        );
    }
}
