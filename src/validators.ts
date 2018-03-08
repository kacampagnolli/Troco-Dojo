import { Validator } from './types';

export const isValid = (valor: number): Validator => {

    if (!valor || valor <= 0) {
        return { validado: false, mensagem: 'não existe troco para essa opeação'};
    }

    return { validado: true, mensagem: ''}
} 