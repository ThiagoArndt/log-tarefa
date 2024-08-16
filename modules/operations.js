import { getLogger } from './logger.js';

export const sum = (a, b) => {
    getLogger().info('Função sum executando!');

    return Math.floor(a) + Math.floor(b);
};

export const subtraction = (a, b) => {
    getLogger().info('Função subtraction executando!');

    return a - b;
};

export const multiplication = (a, b) => {
    getLogger().info('Função multiplication executando!');

    return a * b;
};

export const division = (a, b) => {
    getLogger().info('Função division executando!');

    return a / b;
};