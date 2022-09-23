import betterSqlite from 'better-sqlite3';

/**
 * Defines an object for database access for the server.
 *
 * This database currently is implemented using Sqlite and accessed through better-sqlite3.
 */
export default class Database {
    static #tables = [
        "user",
        "hunt",
        "imagehunt",
    ];

    #database = null;

    constructor() {
        this.#database = betterSqlite('./hunter.db', {});
    }

    findOne(stmt, params) {
        return this.#database.prepare(stmt).get(params);
    }

    findAll(stmt, params) {
        return this.#database.prepare(stmt).all(params);
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
        this.#database.exec(`CREATE TABLE hunt
                             (
                                 hunt_id     INTEGER primary key,
                                 model       TEXT NOT NULL,
                                 type        TEXT NOT NULL,
                                 location    TEXT NOT NULL,
                                 description TEXT NOT NULL
                             );`)
        this.#database.exec(`CREATE TABLE hunt_images
                             (
                                 image_id  INTEGER primary key,
                                 imagehunt INTEGER,
                                 url       TEXT NOT NULL,
                                 FOREIGN KEY (imagehunt) REFERENCES hunt (hunt_id) ON DELETE CASCADE
                             );`)
        this.#database.exec(`CREATE INDEX imagehunt_index ON hunt_images (imagehunt);`)
    }

    deleteDB() {
        Database.#tables.forEach(table => {
            const stmt = `DROP TABLE IF EXISTS ${table}`;
            this.#database.exec(stmt);
        });
    }
}
