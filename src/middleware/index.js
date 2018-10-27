import promiseMiddleware from 'redux-promise'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

export var middleWares=[
    promiseMiddleware,
    loggerMiddleware
]