import loggerService from './loggerService.js';

export const sum = (a, b) => {
    loggerService.info('Função sum executando!');

    return Math.floor(a) + Math.floor(b);
};

export const subtraction = (a, b) => {
    loggerService.info('Função subtraction executando!');

    return a - b;
};

export const multiplication = (a, b) => {
    loggerService.info('Função multiplication executando!');

    return a * b;
};

export const division = (a, b) => {
    loggerService.info('Função division executando!');

    return a / b;
};