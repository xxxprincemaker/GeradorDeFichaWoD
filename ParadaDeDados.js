export class ParadaDeDados{
    constructor(nivel){
        this.ParadaDeDadosFisico    =     this.getParadaDeDadosFisico(nivel);
        this.ParadaDeDadosSociais   =     this.getParadaDeDadosSociais(nivel);
        this.ParadaDeDadosMentais   =     this.getParadaDeDadosMentais(nivel);
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