import React from 'react';
import NestedComponents from './nestedComponents/App';
import StatelessComponent from './statelessFnComponent/App';
import PassAnArrayAsProps from './passAnArrayAsProps/App';
import OverrideDefaultProps from './overrideDefaultProps/App';

class MainApp extends React.Component {
    render() {
        return (
            <main className='App-main'>
                <h2>Main</h2>
                <NestedComponents />
                <StatelessComponent />
                <PassAnArrayAsProps />
                <OverrideDefaultProps />
                
            </main>
        );
    }
}

export default MainApp;
