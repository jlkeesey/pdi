import Hunt from "../entity/Hunt.js";

export default class HuntDao {
    static #byId = "SELECT * FROM hunt WHERE hunt_id = ?";
    static #imageByHunt = "SELECT image_id FROM hunt_images WHERE imagehunt = ?";

    #db = null;

    constructor(db) {
        this.#db = db;
    }

    find(huntId) {
        const row = this.#db.findOne(HuntDao.#byId, [huntId])
        if (row) {
            const imageRows = this.#db.findAll(HuntDao.#imageByHunt, [huntId]);
            const images = imageRows.map(row => row.image_id);
            return new Hunt(row.hunt_id, row.model, row.type, row.location, row.description, images);
        }
        return undefined;
    }
}