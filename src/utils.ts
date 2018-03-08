import { Dinheiro } from './types'

export const calculaResultado = (a: number, b: number, qtd: number) :number => (((a * 10) - ((b * qtd) * 10))/10)

export const criaDinheiro = (valor: number, qtd: number , desc: string, tipo:string): Dinheiro =>  {
    return {valor, qtd, desc: `${qtd} ${desc}${qtd > 1 ? 's': ''} de ${valor} ${tipo}`}
}
