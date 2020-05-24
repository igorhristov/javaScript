import React from 'react';
import './App.css';
import Header from './components/Header/HeaderApp';
import Footer from './components/Footer/FooterApp';
import Main from './components/Main/MainApp';

function App() {
    return (
        <div className='App'>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
