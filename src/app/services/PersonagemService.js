import {Personagem} from "../model/Personagem.js";

export default {
    async getPersonagem(req, res) {
        return new Personagem("Adepto Maior", "Hermetico");
    }
}