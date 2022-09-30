import './App.css';
import Main from './Main.js';
//import React, {useState} from 'react';

/**
 * Main application wrapper that sets up the decorations of the page that are common across the
 * application such as the logo.
 */
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src="app.svg" className="App-logo" alt="logo"/>
                <span className="App-header-title">Hunter</span>
            </header>
            <main className="App-main">
                <Main/>
            </main>
        </div>
    );
}

export default App;
