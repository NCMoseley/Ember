import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const initialState = { CountReducer: { count: 123, wish_value: 12 } };

// strange syntax used to allow initialState call
const createFinalStore = compose(applyMiddleware(thunk))(createStore);

const store = createFinalStore(reducer, initialState);

export default store;
