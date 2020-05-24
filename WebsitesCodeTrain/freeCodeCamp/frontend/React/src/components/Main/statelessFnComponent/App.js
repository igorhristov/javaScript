import React from 'react';

const CurrentDate = (props) => {
    return (
        <div>
            <p>The current date is: {props.date}</p>
        </div>
    );
};

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 className="text-success">Pass Props to a Stateless Functional Component</h2>
                <h4>What date is it?</h4>
                <CurrentDate date={Date()} />
            </div>
        );
    }

}

export default Calendar