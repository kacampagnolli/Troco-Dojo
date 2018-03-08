import CaulculaTroco  from './CalculaTroco'
import { isValid } from './validators'
import { Validator } from './types';


const init = () =>{
    if(process.env.VALOR && process.env.VALORPAGO ) {
        const troco =((parseFloat(process.env.VALORPAGO!) * 10) - (parseFloat(process.env.VALOR!) * 10 ))/ 10
        console.log(`O troco é de: ${troco}`);
        console.log('-------- Descrição do Troco ---------');
        const valida: Validator = isValid(troco)
        if (valida.validado) {
            const c = new CaulculaTroco(troco)
            c.calcula()
        }
        console.log(valida.mensagem)
    } else {
        console.log("Usar: npm run build --env.valor=150 --env.valorPago=100 antes de usar o npm start")
    } 
}

init();
