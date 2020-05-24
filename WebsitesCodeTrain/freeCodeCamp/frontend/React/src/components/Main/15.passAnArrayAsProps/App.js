import React from 'react';

const List = (props) => {
    return <p>{props.tasks.join(', ')}</p>;
};

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 className='text-success'>Pass an Array as Props</h2>
                <h3>To Do Lists</h3>
                <h4>Today</h4>
                <List tasks={['learn react', 'coding']} />
                <h4>Tomorrow</h4>
                <List tasks={['work', 'github commit', 'sleep']} />
            </div>
        );
    }
}

export default ToDo;
