import {Personagem} from "../model/Personagem.js";
import db from "../../../database.js";
import helper from "../config/helper.js";
import config from "../config/database-config.js";


export default {
    async getPersonagem(arquetipo, nivel) {
        return new Personagem(nivel, arquetipo);
    },
    async getCrencas(page = 1) {
        const offset = helper.getOffset(page, config.listPerPage);
        const rows = await db.query(
            'SELECT * from "Crenca" OFFSET $1 LIMIT $2',
            [offset, config.listPerPage]
        );
        const data = helper.emptyOrRows(rows);
        const meta = {page};

        return {
            data,
            meta
        }
    }
}


