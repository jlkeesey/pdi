
export default class User {
    constructor(userId, userName, password) {
        this.userId = userId;
        this.userName = userName;
        // Normally this would be a hash and not passed around unless actually needed for
        // logging in the user, but for simplicity we are keeping it clear text and just
        // passing around with the rest of the data.
        this.password = password;
    }
}
