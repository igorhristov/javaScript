import React from 'react';
import NestedComponents from './10.nestedComponents/App';
import StatelessComponent from './14.statelessFnComponent/App';
import PassAnArrayAsProps from './15.passAnArrayAsProps/App';
import OverrideDefaultProps from './17.overrideDefaultProps/App';
import PropsWithStatelessComponents from './20.propsWithStatlessComp/App';
import StateInTheUserInterface from './22.renderStateInUserInterface/App';
import SetStateWithThisSetState from './24.thisSetState/App';
import StateToToggleAnElement from './26.useStateToToggleElement/App';
import SimpleCounter from './27.writeSimpleCounter/App';
import ControlledInput from './28.createControlledInput/App';
import ControlledForm from './29.createControlledForm/App';
import PassStateAsPropsToChildComp from './30.stateAsPropsToChildComp/App';
import PassCallbackAsProps from './31.passCallbackAsProps/App';
import ComponentDidMount from './33.componentDidMount/App';
import AddEventListeners from './34.addEventListeners/EventListeners';
import ReRendersWithShouldComponentUpdate from './35.shouldComponentUpdate/ShouldComponentUpdate';
import RenderWithIfElseCondition from './38.renderWithIfElse/RenderWithIfElse';
import TernaryForRender from './40.ternaryForCondRender/TernaryForConditionalRendering';
import GameOfChance from './42.conditionallyFromProps/GameOfChance';

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
                <SetStateWithThisSetState />
                <h2 className='text-success'>Use State to Toggle an Element</h2>
                <StateToToggleAnElement />
                <SimpleCounter />
                <ControlledInput />
                <ControlledForm />
                <PassStateAsPropsToChildComp />
                <PassCallbackAsProps />
                <ComponentDidMount />
                <AddEventListeners />
                <ReRendersWithShouldComponentUpdate />
                <h2 className='text-success'>Render with an If-Else Condition</h2>
                <RenderWithIfElseCondition />
                <TernaryForRender />
                <GameOfChance />
            </main>
        );
    }
}

export default MainApp;
