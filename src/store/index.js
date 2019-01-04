import { createStore } from 'redux';
import reducer from './reducers';

let store = createStore(reducer);

window._store = store;

export default store;