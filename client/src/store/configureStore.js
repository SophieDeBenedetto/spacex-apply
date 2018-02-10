import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer                             from '../reducers'
import initialState                            from './initialState';
import apiMiddleware                           from '../middleware/apiMiddleware';
import astronautValidationMiddleware           from '../middleware/astronautValidationMiddleware';

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(
      astronautValidationMiddleware,
      apiMiddleware
    ))
  )
}
