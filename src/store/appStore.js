import {createStore, applyMiddleware,compose    } from 'redux'
import appReducers from '../reducers'
import {middleWares} from '../middleware'

const composables = [
    applyMiddleware(...middleWares)
    ]

const enhancer = compose(...composables)

const store = createStore(
    appReducers,
    enhancer
)
export default store