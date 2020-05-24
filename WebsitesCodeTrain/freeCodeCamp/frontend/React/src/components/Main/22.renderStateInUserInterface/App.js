import React from 'react'

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp',
        };
    }
    render() {
        return (
            <div>
                <h2 className='text-success'>Render State in the User Interface</h2>
                <h4>{this.state.name}</h4>
            </div>
        );
    }
}

export default MyComponent