import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'
import { bindConnect } from 'svelte-redux'

const middleware = [ thunk ];
let composeEnhancers = compose;
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware)),
)

store.dispatch(getAllProducts())

export const connect = bindConnect(store)
