import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false,
        };
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    toggleVisibility() {
        this.setState((state, props) => ({
            visibility: state.visibility === true ? false : true,
        }));
    }
    render() {
        if (this.state.visibility) {
            return (
                <div>

                    <button onClick={this.toggleVisibility}>Hide Me</button>
                    <h4>Now you see me!</h4>
                </div>
            );
        } else {
            return (
                <div>

                    <button onClick={this.toggleVisibility}>Show Me</button>
                </div>
            );
        }
    }
}

export default MyComponent;
