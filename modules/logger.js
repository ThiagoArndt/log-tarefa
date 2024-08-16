import 'dotenv/config'

import { createLogger, transports, format } from "winston"
import LokiTransport from "winston-loki"



let logger


const initializeLogger = () => {
    if (logger) {
        return
    }

    logger = createLogger({
        transports: [new LokiTransport({
            host: "https://logs-prod-024.grafana.net",
            labels: { app: 'calculator' },
            json: true,
            level: "debug",
            basicAuth: `970333:${process.env.TOKEN}`,
            format: format.json(),
            replaceTimestamp: true,
            onConnectionError: (err) => console.error(err)
        }),
        new transports.Console({
            format: format.combine(format.simple(), format.colorize())
        })]
    })
}

export const getLogger = () => {
    initializeLogger()

    return logger
}