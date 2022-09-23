import Dao from "../db/dao/Dao.js";

/**
 * Defines the server-side login function. Eventually this will access the DB to retrieve
 * the user info.
 *
 * Placeholder just compares the user name to the password and if they are the same, logins
 * the user.
 *
 * @param userName the username to validate.
 * @param password the password to validate.
 * @returns {User} the matching User if the credentials are valid, undefined otherwise.
 */
export default function login(userName, password) {
    const user = Dao.user.findByName(userName);
    if (user && user.password === password) {
        return user;
    } else {
        return undefined;
    }
}
