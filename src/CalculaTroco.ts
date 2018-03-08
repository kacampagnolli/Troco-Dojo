import TrocoDeDez from "./TrocoDeDez";
import TrocoDeCinco from "./TrocoDeCinco";
import TrocoDeCem from "./TrocoDeCem";
import TrocoDeCinquenta from "./TrocoDeCinquenta";
import TrocoDeUm from "./TrocoDeUm";
import TrocoDeCinquentaCentavos from "./TrocoDeCinquentaCentavos";
import TrocoDeDezCentavos from "./TrocoDeDezCentavos";
import TrocoDeCincoCentavos from "./TrocoDeCincoCentavos";
import TrocoDeUmCentavo from "./TrocoDeUmCentavo";

import { TipoTroco, Dinheiro, TipoDinheiro, DescDinheiro, TiposDeTroco } from './types';
import { calculaResultado, criaDinheiro } from './utils';


 export default class CaulucaTroco {

    private troco100: TipoTroco = new TrocoDeCem(100, TipoDinheiro.nota, DescDinheiro.reais, TiposDeTroco.cem);
    private troco50: TipoTroco = new TrocoDeCinquenta(50, TipoDinheiro.nota, DescDinheiro.reais, TiposDeTroco.cinquenta);
    private troco10: TipoTroco = new TrocoDeDez(10, TipoDinheiro.nota, DescDinheiro.reais, TiposDeTroco.dez);
    private troco5: TipoTroco = new TrocoDeCinco(5, TipoDinheiro.nota, DescDinheiro.reais, TiposDeTroco.cinco);
    private troco1: TipoTroco = new TrocoDeUm(1, TipoDinheiro.moeda, DescDinheiro.reais, TiposDeTroco.um);
    private troco_50: TipoTroco = new TrocoDeCinquentaCentavos(0.50, TipoDinheiro.moeda, DescDinheiro.centavos, TiposDeTroco.cinquenta);
    private troco_10: TipoTroco = new TrocoDeDezCentavos(0.10, TipoDinheiro.moeda, DescDinheiro.centavos, TiposDeTroco.dez);
    private troco_05: TipoTroco = new TrocoDeCincoCentavos(0.05, TipoDinheiro.moeda, DescDinheiro.centavos, TiposDeTroco.cinco);
    private troco_01: TipoTroco = new TrocoDeUmCentavo(0.01, TipoDinheiro.moeda, DescDinheiro.centavos, TiposDeTroco.um);

    constructor(private troco:number = 0) {  }

    calcula = () => {
        const array: Dinheiro[] = []
        this.troco100.next(this.troco50);
        this.troco50.next(this.troco10);
        this.troco10.next(this.troco5);
        this.troco5.next(this.troco1);
        this.troco1.next(this.troco_50);
        this.troco_50.next(this.troco_10);
        this.troco_10.next(this.troco_05);
        this.troco_05.next(this.troco_01);
        this.troco100.verificaTroco(this.troco, array).map((r) => {
            console.log(r.desc)
        })
    }
    


 }