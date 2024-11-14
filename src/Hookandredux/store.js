import { createStore } from 'redux';
import { cartReducer } from './cardreducer'; 

const store = createStore(cartReducer);
export default store;
