import Usuario from "./Usuario";

export default class Auxiliar extends Usuario { 
    constructor(servicoComunitario = 0) {
        super();
        this.servicoComunitario = servicoComunitario;
    }
}