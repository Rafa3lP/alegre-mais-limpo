export default class Abastecimento{
    constructor(
        id = '',
        placa = '',
        data = new Date().toISOString(),
        quantidade = '',
        valor = '',
        quilometragem = '',
        mediaConsumo = ''
    ){
        this.id = id,
        this.placa = placa,
        this.data = data,
        this.quantidade = quantidade,
        this.valor = valor,
        this.quilometragem = quilometragem,
        this.mediaConsumo = mediaConsumo
    }
}