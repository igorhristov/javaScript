import React from 'react';

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'MyNameBot',
        };
    }

    render() {
        return (
            <div>
                <h2 className='text-success'>Pass State as Props to Child Components</h2>
                <Navbar name={this.state.name} />
            </div>
        );
    }
}

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Hello, my name is: {this.props.name}</h4>
            </div>
        );
    }
}

export default MyApp;
