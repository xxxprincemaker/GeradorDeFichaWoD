import {Personagem} from "../model/Personagem.js";
import db from "../../../database.js";


export default {
    async getPersonagem(arquetipo, nivel) {
        return new Personagem(nivel, arquetipo);
    },

    async getCrencas() {
        return await db.query(
            'SELECT * from "Crenca" order by "Crenca".nome ASC',
        )
    },

    async getPraticas() {
        return await db.query('SELECT * from "Pratica" order by "Pratica".nome ASC');
    },

    async getInstrumentos() {
        return await db.query('SELECT * from "Instrumentos" order by "Instrumentos".nome ASC');
    }

}


