import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        // change code below this line
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        // change code above this line
    }
    // change code below this line
    increment() {
        this.setState((oldState, props) => ({
            count: oldState.count + 1,
        }));
    }
    decrement() {
        this.setState((oldState, props) => ({
            count: oldState.count - 1,
        }));
    }

    reset() {
        this.setState((oldState, props) => ({
            count: 0,
        }));
    }
    // change code above this line
    render() {
        return (
            <div>
                <h2 className='text-success'>Write a Simple Counter</h2>
                <button className='inc' onClick={this.increment}>
                    Increment!
                </button>
                <button className='dec' onClick={this.decrement}>
                    Decrement!
                </button>
                <button className='reset' onClick={this.reset}>
                    Reset
                </button>
                <h4>Current Count: {this.state.count}</h4>
            </div>
        );
    }
}

export default Counter;
