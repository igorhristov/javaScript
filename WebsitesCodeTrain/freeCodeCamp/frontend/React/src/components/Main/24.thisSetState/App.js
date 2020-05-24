import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Initial State',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ name: 'React Rocks!' });
    }

    render() {
        return (
            <div>
                <h2 className="text-success">Set State with this.setState</h2>
                <button onClick={this.handleClick}>Click Me</button>
                <h4>{this.state.name}</h4>
            </div>
        );
    }
}
export default MyComponent;
