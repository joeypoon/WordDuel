import remoteMiddleware from './remote_action_middleware';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';

const createStoreWithMiddleware = applyMiddleware(
  remoteMiddleware
)(createStore);
export const store = createStoreWithMiddleware(reducer);