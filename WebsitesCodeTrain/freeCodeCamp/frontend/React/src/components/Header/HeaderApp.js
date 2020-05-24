import React from 'react';
import logo from '../../logo.svg';

class HeaderApp extends React.Component {
    render() {
        return (
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    freeCodeCamp
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
        );
    }
}

export default HeaderApp;
