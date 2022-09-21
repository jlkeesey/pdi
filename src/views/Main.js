import './App.css';
import Login from './Login.js';
import React, {useState} from 'react';

/**
 * Main panelfor the application. Starts displaying the Login panel and then once the user is logged
 * in, displays the application and its data.
 */
function Main() {
    const [user, setUser] = useState(null);
    if (!user) {
        return (<Login setUser={setUser}/>);
    } else {
        return (<div className="App-Main"></div>);
    }
}

export default Main;
