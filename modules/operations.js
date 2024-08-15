import logger from './logger.js';

export const sum = (a, b) => {
    logger.info('Função sum executando!');

    return Math.floor(a) + Math.floor(b);
};

export const subtraction = (a, b) => {
    logger.info('Função subtraction executando!');

    return a - b;
};

export const multiplication = (a, b) => {
    logger.info('Função multiplication executando!');

    return a * b;
};

export const division = (a, b) => {
    logger.info('Função division executando!');

    return a / b;
};