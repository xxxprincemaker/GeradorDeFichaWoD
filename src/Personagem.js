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
            ParadaDeDadosFisico: this.ParadaDeDados.getParadaDeDadosFisico(this.nivel, this.arquetipo),
            ParadaDeDadosSociais: this.ParadaDeDados.getParadaDeDadosSociais(this.nivel, this.arquetipo),
            ParadaDeDadosMentais: this.ParadaDeDados.getParadaDeDadosMentais(this.nivel, this.arquetipo)
        }
    }

    getParadigma() {
        return this.paradigma;
    }
}
