import React, { Component } from 'react';
import GetInput from './GetInput';
import RenderInput from './RenderInput';

class MyApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value,
        });
    }

    render() {
        return (

            <div>
                <h2 className='text-success'>
                    31 Pass a Callback as Props
                </h2>
                <GetInput 
                    input={this.state.inputValue} handleChange={this.handleChange} 
                />
                <RenderInput 
                    input={this.state.inputValue} 
                />
            </div>

        );
    }
}

export default MyApp;
