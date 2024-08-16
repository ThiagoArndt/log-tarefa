//Feito por Thiago Arndt & Eduardo Maia

import { getLogger } from './modules/logger.js';
import * as calculatorInterface from './modules/interface.js';

getLogger().info('Application started');

calculatorInterface.main()