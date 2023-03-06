import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HotelReducer } from './reducer/Hotel';
const reducers = combineReducers({
    Hotel:HotelReducer
});

const initialState = [];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
