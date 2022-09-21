/**
 * Defines the server-side login function. Eventually this will access the DB to retrieve
 * the user info.
 *
 * Placeholder just compares the user name to the password and if they are the same, logins
 * the user.
 *
 * @param userName the username to validate.
 * @param password the password to validate.
 * @returns {number} the user id if the credentials are valid, 0 otherwise.
 */
function login(userName, password) {
    console.log(`@@@@ userName: "${userName}"  password: "${password}"`)
    if (userName === password) {
        console.log(`@@@@ userName === password`)
        return 1234;
    } else {
        console.log(`@@@@ userName !== password`)
        return 0;
    }
}

module.exports = login;
