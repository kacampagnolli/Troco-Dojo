export interface TipoTroco {
    verificaTroco: (troco: number, array?: Dinheiro[]) => Dinheiro[],
    next: (tipoTroco: TipoTroco) => void
}

export type Dinheiro  = {
    valor: number,
    desc: string,
    qtd: number,
}

export enum TipoDinheiro {
    moeda = 'moeda',
    nota = 'nota'
}

export enum DescDinheiro {
    centavos = 'centavos',
    reais = 'reais',
}

export enum TiposDeTroco {
    cem = 100,
    cinco = 5,
    cinquenta = 50,
    dez = 10,
    um = 1,
}

export type Validator = {
    validado: boolean,
    mensagem: string
}