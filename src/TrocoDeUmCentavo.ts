import { TipoTroco, Dinheiro, TipoDinheiro, DescDinheiro, TiposDeTroco } from './types';
import { calculaResultado, criaDinheiro } from './utils';
import Troco from './Troco';
export default class TrocoDeUmCentavo extends Troco {

   

    constructor( dinheiro: number,  tipo: TipoDinheiro,  desc: DescDinheiro, troco: TiposDeTroco ){ 
        super(dinheiro, tipo, desc, troco)
        
    }

    public verificaTroco = (troco: number, array?: Dinheiro[]) => {
        const qtd = Math.floor(troco / this.dinheiro)
        const result = calculaResultado(troco , this.dinheiro, qtd)  
        if (qtd >= 1 ) {
            const obj: Dinheiro = criaDinheiro(1,qtd,TipoDinheiro.moeda,DescDinheiro.centavos)
            array!.push(obj)
        }

       
        return array!
    }

   

}