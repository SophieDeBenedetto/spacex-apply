import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer                             from '../reducers'
import initialState                            from './initialState';
import apiMiddleware                           from '../middleware/apiMiddleware';
import astronautValidationMiddleware           from '../middleware/astronautValidationMiddleware';
import ValidateAttributeUpdateMiddleware              from '../middleware/ValidateAttributeUpdateMiddleware';

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(
      astronautValidationMiddleware,
      ValidateAttributeUpdateMiddleware,
      apiMiddleware
    ))
  )
}
