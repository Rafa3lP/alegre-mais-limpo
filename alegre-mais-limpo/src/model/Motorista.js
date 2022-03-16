import Usuario from "./Usuario";

export default class Motorista extends Usuario { 
    constructor(numCarteira = '') {
        super();
        this.numCarteira = numCarteira;
    }
}