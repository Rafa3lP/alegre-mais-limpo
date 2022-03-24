export default class Abastecimento{
    constructor(
        id = '',
        idCaminhaoColeta = '',
        placa = '',
        data = new Date().toISOString(),
        quantidade = '0',
        valor = '0',
        quilometragem = '',
        mediaConsumo = ''
    ){
        this.id = id,
        this.idCaminhaoColeta = idCaminhaoColeta,
        this.placa = placa,
        this.data = data,
        this.quantidade = quantidade,
        this.valor = valor,
        this.quilometragem = quilometragem,
        this.mediaConsumo = mediaConsumo
    }
}