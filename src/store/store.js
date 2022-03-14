import {createStore, combineReducers} from 'redux'
import { authReducer } from '../reducers/authReducer';


// combineReducers alberga todo los reducers a usar en el sistema
const reducers=combineReducers({
    auth: authReducer
})

// Solo acepta un reducer por ello se genera el combineReducers
export const store = createStore(reducers);