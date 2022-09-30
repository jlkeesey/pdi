import './App.css';
import Login from './Login.js';
import First from './First.js';
import React, {useState} from 'react';

/**
 * Main panel for the application. Starts displaying the Login panel and then once the user is logged
 * in, displays the application and its data.
 */
function Main() {
    const [user, setUser] = useState(null);
    if (!user) {
        return (<Login setUser={setUser}/>);
    } else {
        return (<First/>);
    }
}

export default Main;
