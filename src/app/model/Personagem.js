import {Paradigma} from "./Paradigma.js";
import { ParadaDeDados } from "./ParadaDeDados.js";

export class Personagem {
    constructor(nivel, arquetipo) {
        this.nivel = nivel;
        this.arquetipo = arquetipo;
        this.paradigma = new Paradigma(arquetipo);
        this.paradigma = this.paradigma.getParadigmaRandomly();
        this.ParadaDeDados = new ParadaDeDados(nivel, arquetipo);
    }

    getParadaDeDados(){
        return {
            ParadaDeDadosFisico: this.ParadaDeDados.ParadaDeDadosFisico,
            ParadaDeDadosSociais: this.ParadaDeDados.ParadaDeDadosSociais,
            ParadaDeDadosMentais: this.ParadaDeDados.ParadaDeDadosMentais,
            ParadaDeDadosZero: 0
        }
    }

    getParadigma() {
        return this.paradigma;
    }


}
