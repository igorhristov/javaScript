import React from 'react';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            submit: this.state.input,
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-success'>Create a Controlled Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange} />
                    <button type='submit'>Submit!</button>
                </form>
                <h4>{this.state.submit}</h4>
            </div>
        );
    }
}

export default MyForm;
