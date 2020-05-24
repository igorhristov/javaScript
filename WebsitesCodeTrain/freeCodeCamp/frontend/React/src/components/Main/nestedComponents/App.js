import React from 'react';

const TypesOfFruit = () => {
    return (
        <div>
            <h4>Fruits</h4>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    );
};
const Fruits = () => {
    return (
        <div>
            <TypesOfFruit />
        </div>
    );
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Render Nested Components</h2>
                <h3>Types of TypesOfFood</h3>
                <Fruits/>
            </div>
        );
    }
}

export default TypesOfFood;
