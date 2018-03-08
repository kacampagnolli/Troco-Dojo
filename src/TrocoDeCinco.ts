import { TipoTroco, Dinheiro, TipoDinheiro, DescDinheiro, TiposDeTroco } from './types';
import { calculaResultado, criaDinheiro } from './utils';
import Troco from './Troco';
export default class TrocoDeCinco extends Troco  {

    constructor( dinheiro: number,  tipo: TipoDinheiro,  desc: DescDinheiro, troco: TiposDeTroco ){ 
        super(dinheiro, tipo, desc, troco)
    }

}