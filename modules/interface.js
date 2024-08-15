import * as operationsService from './operations.js';
import { select, input } from '@inquirer/prompts';
import logger from './logger.js';

export async function main() {
    const answer = await select({
        message: 'Selecione uma opção',
        choices: [
            {
                name: 'Sum',
                value: 'sum'
            },
            {
                name: 'Subtraction',
                value: 'subtraction'
            },
            {
                name: 'Multiplication',
                value: 'multiplication'
            },
            {
                name: 'Division',
                value: 'division'
            },

        ],
    });

    const firstNumber = await input({ message: "Digite o primeiro número: " });
    logger.debug("Primeiro número digitado: " + firstNumber);
    const secondNumber = await input({ message: "Digite o segundo número: " });
    logger.debug("Segundo número digitado: " + secondNumber);

    let result = calculation();

    console.log(result)
    logger.debug("Resultado: " + result);

    if (result === undefined) {
        logger.crit("Resultado não pode ser definido")
    }

    if (Number.isNaN(result)) {
        logger.warn("Erro ao realizar cálculo")
    }

    function calculation() {
        logger.info('Função Calculation executando!');

        switch (answer) {
            case "sum":
                return operationsService.sum(firstNumber, secondNumber)
            case "subtraction":
                return operationsService.subtraction(firstNumber, secondNumber)
            case "multiplication":
                return operationsService.multiplication(firstNumber, secondNumber)
            case "division":
                return operationsService.division(firstNumber, secondNumber)
            default:
                logger.crit("Usuário desbloqueou a quinta alternativa secreta!")
        }
    }
}