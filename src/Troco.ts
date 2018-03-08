import { TipoTroco, Dinheiro, TipoDinheiro, DescDinheiro, TiposDeTroco } from './types';
import { calculaResultado, criaDinheiro } from './utils';
export default abstract class Troco implements TipoTroco {

    public proximoTroco?: TipoTroco;

    constructor(protected dinheiro: number, private tipo: TipoDinheiro, private desc: DescDinheiro, private troco: TiposDeTroco){ }

    public verificaTroco = (troco: number, array?: Dinheiro[])  => {
        const qtd = Math.floor(troco / this.dinheiro)
        const result = calculaResultado(troco ,this.dinheiro, qtd)  
        if (qtd >= 1 ) {
            const obj: Dinheiro = criaDinheiro(this.troco,qtd,this.tipo,this.desc)
            array!.push(obj)
        }
        if (result !== 0) {
            return this.proximoTroco!.verificaTroco(result,array)
        }
            return array!
    }

    public next = (proximo: TipoTroco) => {
        this.proximoTroco = proximo
    }

}