import {strict as assert} from 'node:assert';
import {Model} from "./Model.js";

export default class Hunt {
    #huntId;
    #model;
    #type;
    #images;
    #location;
    #description;

    constructor(huntId, model, type, location, description, images) {
        assert(model instanceof Model, "model must be a Model");
        assert(type, "type must be defined");
        this.#huntId = huntId;
        this.#model = model;
        this.#type = type;
        this.#location = location ?? "";
        this.#description = description ?? "";
        if (this.#images) {
            if (Array.isArray(images)) {
                this.#images = images;
            } else {
                this.#images = [images];
            }
        } else {
            this.#images = [];
        }
        this.#images = images ? images : [];
    }
}