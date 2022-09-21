import './Login.css';
import React, {useState} from 'react';
import {login} from './api';

/**
 * Login component comprising the username, password, and submit button.
 */
function Login(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function userChangeHandler(e) {
        setUserName(e.target.value);
    }

    function passwordChangeHandler(e) {
        setPassword(e.target.value);
    }

    function onClickHandler(e) {
        e.target.disabled = true;
        login(userName, password,
            (userId) => {
                console.log(`Login success: userId=${userId}`);
                e.target.disabled = false;
                props.setUser(userId);
            },
            (message) => {
                e.target.disabled = false;
                setErrorMessage("Invalid user name or password");
            })
    }

    return (
        <div className="Login">
            <form>
                <label>User name:</label>
                <input className="userName" value={userName} onChange={userChangeHandler}/>
                <label>Password:</label>
                <input className="password" type="password" value={password} onChange={passwordChangeHandler}/>
                <button onClick={onClickHandler}>Login</button>
            </form>
            <p>{errorMessage}</p>
        </div>
    );
}

export default Login;
