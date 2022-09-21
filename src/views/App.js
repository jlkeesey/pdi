import './App.css';
import Main from './Main.js';
import React, {useState} from 'react';

/**
 * Main application wrapper that sets up the decorations of the page that are common across the
 * application such as the logo.
 */
function App() {
    const [user, setUser] = useState(null);
    return (
        <div className="App">
            <header className="App-header">
                <img src="porsche-marque-trademark.medium.min.webp" className="App-logo" alt="logo"/>
                <span className="App-header-title">Porsche ‘Hunter’</span>
            </header>
            <main className="App-main">
                <Main/>
            </main>
        </div>
    );
}

export default App;
