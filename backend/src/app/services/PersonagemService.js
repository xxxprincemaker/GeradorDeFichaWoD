import {Personagem} from "../model/Personagem.js";
import db from "../../../database.js";


export default {
    async getPersonagem(arquetipo, nivel) {
        return new Personagem(nivel, arquetipo);
    },
    async getCrencas() {
        return await db.query(
            'SELECT * from "Crenca"',
        )
    }
}


