import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUser: null,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUser: 33223,
            });
        }, 4000);
    }

    render() {
        return (
            <div>
                <h2 className='text-success'>Use the Lifecycle Method componentDidMount</h2>
                <h4>Active Users: {this.state.activeUser}</h4>
            </div>
        );
    }
}

export default MyComponent;
