export class ParadaDeDados{
    constructor(nivel, arquetipo){
        this.ParadaDeDadosFisico    =     this.getParadaDeDadosFisico(nivel, arquetipo);
        this.ParadaDeDadosSociais   =     this.getParadaDeDadosSociais(nivel, arquetipo);
        this.ParadaDeDadosMentais   =     this.getParadaDeDadosMentais(nivel, arquetipo);
    }
    getParadaDeDadosFisico(nivel, arquetipo){
        if (nivel === "Aprendiz" && arquetipo === "Hermetico"){
            return 4;
        }
        else if (nivel === "Adepto" && arquetipo === "Hermetico"){
            return 5;
        }
        else if (nivel === "Adepto Maior" && arquetipo === "Hermetico"){
            return 6;
        }
    }

    getParadaDeDadosMentais(nivel, arquetipo){
        if(nivel === "Aprendiz" && arquetipo === "Hermetico"){
            return 7;
        }
        else if (nivel === "Adepto" && arquetipo === "Hermetico"){
            return 8;
        }
        else if (nivel === "Adepto Maior" && arquetipo === "Hermetico"){
            return 9;
        }
    }

    getParadaDeDadosSociais(nivel, arquetipo){
        if(nivel === "Aprendiz" && arquetipo === "Hermetico"){
            return 6;
        }
        else if (nivel === "Adepto" && arquetipo === "Hermetico"){
            return 7;
        }
        else if (nivel === "Adepto Maior" && arquetipo === "Hermetico"){
            return 8;
        }
    }
}