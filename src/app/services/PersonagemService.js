import {Personagem} from "../model/Personagem.js";

export default {
    async getPersonagem(arquetipo, nivel) {
        return new Personagem(nivel, arquetipo);
    }
}