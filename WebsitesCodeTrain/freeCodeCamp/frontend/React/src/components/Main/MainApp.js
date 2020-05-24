import React from 'react';
import NestedComponents from './10.nestedComponents/App';
import StatelessComponent from './14.statelessFnComponent/App';
import PassAnArrayAsProps from './15.passAnArrayAsProps/App';
import OverrideDefaultProps from './17.overrideDefaultProps/App';
import PropsWithStatelessComponents from './20.propsWithStatlessComp/App';
import StateInTheUserInterface from './22.renderStateInUserInterface/App';

class MainApp extends React.Component {
    render() {
        return (
            <main className='App-main'>
                <h2>Main</h2>
                <NestedComponents />
                <StatelessComponent />
                <PassAnArrayAsProps />
                <OverrideDefaultProps />
                <PropsWithStatelessComponents />
                <StateInTheUserInterface />
            </main>
        );
    }
}

export default MainApp;
