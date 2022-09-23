import UserDao from './UserDao.js'
import HuntDao from "./HuntDao.js";

export default class Dao {
    static #db = null;
    static #user = null;
    static #hunt = null;

    static setDb(db) {
        this.#db = db;
    }

    static get user() {
        if (!this.#user) {
            this.#user = new UserDao(this.#db);
        }
        return this.#user;
    }

    static get hunt() {
        if (!this.#hunt) {
            this.#hunt = new HuntDao(this.#db);
        }
        return this.#hunt;
    }
}