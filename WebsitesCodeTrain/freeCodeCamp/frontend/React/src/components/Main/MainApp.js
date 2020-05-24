import React from 'react';
import NestedComponents from './nestedComponents/App'

class MainApp extends React.Component {
    render() {
        return (
            <main className='App-main'>
                <h2>Main</h2>
                <NestedComponents/>
            </main>
        );
    }
}

export default MainApp;
