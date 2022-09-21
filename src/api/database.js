/**
 * Defines an object for database access for the server.
 *
 * This database currently is implemented using Sqlite and accessed through better-sqlite3.
 */
class Database {
    static #tables = [
        "user",
    ];

    #database = null;

    constructor() {
        this.#database = require('better-sqlite3')('./hunter.db', {});
    }

    createDB() {
        this.#database.exec(`CREATE TABLE user
                             (
                                 user_id   INTEGER primary key,
                                 user_name TEXT NOT NULL UNIQUE,
                                 password  TEXT NOT NULL
                             );`)
        this.#database.exec(`INSERT INTO user (user_name, password)
                             VALUES ('user', 'password')`)
    }

    deleteDB() {
        Database.#tables.forEach(table => {
            const stmt = `DROP TABLE IF EXISTS ${table}`;
            this.#database.exec(stmt);
        });
    }
}

module.exports = new Database();


