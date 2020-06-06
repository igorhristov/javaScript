import React from 'react';
import Results from './Results';

class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    render() {
        const expression = Math.floor(Math.random() * 2); // change code here
        return (
            <div>
                <h2 className='text-success'>Render Conditionally from Props</h2>
                <button onClick={this.handleClick}>Play Again</button>
                <Results fiftyFifty={expression} />
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
}

export default GameOfChance;
