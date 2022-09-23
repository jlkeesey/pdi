import User from "../entity/User.js";

export default class UserDao {
    static #byId = "SELECT * FROM user WHERE user_id = ?";
    static #byName = "SELECT * FROM user WHERE user_name = ?";

    #db = null;

    constructor(db) {
        this.#db = db;
    }

    find(userId) {
        const row = this.#db.findOne(UserDao.#byId, [userId])
        if (row) {
            return new User(row.user_id, row.user_name, row.password);
        }
        return undefined;
    }

    findByName(userName) {
        const row = this.#db.findOne(UserDao.#byName, [userName])
        if (row) {
            return new User(row.user_id, row.user_name, row.password);
        }
        return undefined;
    }
}