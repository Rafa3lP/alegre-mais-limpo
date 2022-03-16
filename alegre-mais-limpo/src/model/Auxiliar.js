import Usuario from "./Usuario";

export default class Auxiliar extends Usuario { 
    constructor(servicoComunitario = false) {
        super();
        this.servicoComunitario = servicoComunitario;
    }
}