import {Paradigma} from "./Paradigma";
import { ParadaDeDados } from "./ParadaDeDados";

export class Personagem {
    constructor(nivel, arquetipo) {
        this.nivel = nivel;
        this.arquetipo = arquetipo;
        this.paradigma = new Paradigma(arquetipo);
        this.paradigma = this.paradigma.getParadigmaRandomly();
        this.ParadaDeDados = new ParadaDeDados(nivel, arquetipo);
    }
    
    getParadaDeDados(){
        return this.ParadaDeDados;
    }

    getParadigma() {
        return this.paradigma;
    }
}
