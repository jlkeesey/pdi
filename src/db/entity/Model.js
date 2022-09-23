export class Model {
    #name;
    #description;

    constructor(name, description) {
        this.#name = name;
        this.#description = description;
    }

    get name() {
        return this.#name;
    }

    get description() {
        return this.#description;
    }
}

export const Model718 = new Model("718", "718");
export const Model911 = new Model("911", "911");
export const ModelTaycan = new Model("Taycan", "Taycan");
export const ModelPanamera = new Model("Panamera", "Panamera");
export const ModelMacan = new Model("Macan", "Macan");
export const ModelCayenne = new Model("Cayenne", "Cayenne");

export const Models = [
    Model718,
    Model911,
    ModelTaycan,
    ModelPanamera,
    ModelMacan,
    ModelCayenne,
];
