import React from 'react';

class RenderInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Render Input:</h4>
                <p>{this.props.input}</p>
            </div>
        );
    }
}

export default RenderInput;
