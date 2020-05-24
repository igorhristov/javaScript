import React from 'react';

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-success'>Create a Controlled Input</h2>
                <input value={this.state.value} type='text' onChange={this.handleChange} />
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
}

export default ControlledInput;
