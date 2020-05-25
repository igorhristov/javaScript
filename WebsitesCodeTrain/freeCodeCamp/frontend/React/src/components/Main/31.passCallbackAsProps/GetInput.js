import React from 'react';

class GetInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Get Input:</h4>
                <input 
                    value={this.props.input} 
                    onChange={this.props.handleChange} 
                />
            </div>
        );
    }
}

export default GetInput;
