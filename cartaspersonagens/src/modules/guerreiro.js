import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {
    static tipo = 'Guerreiro'
    static descricao = 'Você será esmagado pela fúria do Guerreiro!'
    forca

    constructor(nome, descricao, forca) {
        super(nome)
        this.forca = forca
    }

    obterInsignia() {
        if(this.destreza >=7) {
            return `Guerreiro furioso`
        }
        return super.obterInsignia()
     }
}