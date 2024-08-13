import winston from "winston";
import { select, input } from '@inquirer/prompts';

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [

        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

logger.info('Application started');

function sum(a, b) {
    return Math.floor(a) + Math.floor(b);
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

async function main() {
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

    function calculation() {
        switch (answer) {
            case "sum":
                return sum(firstNumber, secondNumber)
            case "subtraction":
                return subtraction(firstNumber, secondNumber)
            case "multiplication":
                return multiplication(firstNumber, secondNumber)
            case "division":
                return division(firstNumber, secondNumber)
            default:
                console.log("Usuário desbloqueou a quinta alternativa secreta!")
        }
    }
    let result = calculation();
    logger.info('Função Calculation chamada com sucesso!');
    console.log(result)
    logger.debug("Resultado: " + result);

    if (result === undefined) {
        logger.crit("Resultado não pode ser definido")
    }

    if (Number.isNaN(result)) {
        logger.warn("Erro ao realizar cálculo")
    }
}

main()