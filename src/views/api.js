export class LoginError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}

/**
 * Calls the server to log the user in.
 *
 * @param userName the user's name.
 * @param password the user's password. Currently unhashed.
 * @param successCB Called if the login was successful with the user's id.
 * @param failedCB Called if the login failed with the failure status.
 */
export function login(userName, password, successCB, failedCB) {
    const path = "/api/login";
    fetch(path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userName: userName, password: password})
    }).then((res) => {
        const status = res.status;
        if (status !== 200) {
            failedCB(status);
            throw new LoginError("Login failure", status);
        }
        return res.json();
    }).then(results => {
        if (successCB) {
            successCB(results.userId);
        }
    });
}


