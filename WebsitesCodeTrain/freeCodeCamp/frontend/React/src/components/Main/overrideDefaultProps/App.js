import React from 'react';

const Items = (props) => {
    return <h4>Current Quantity of Items in Cart: {props.quantity}</h4>;
};

Items.defaultProps = {
    quantity: 0,
};

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2 className='text-success'>Override Default Props</h2>
                <Items />
                <Items quantity={10} />
            </div>
        );
    }
}

export default ShoppingCart;
