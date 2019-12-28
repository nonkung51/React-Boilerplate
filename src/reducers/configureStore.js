import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reduxThunk from 'redux-thunk';
import storeReducer from './storeReducer';

const persistConfig = {
	key: 'root',
	storage
};

const rootReducer = combineReducers({
    store: storeReducer
    //add more reducer here.
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
	let store = createStore(persistedReducer, {}, applyMiddleware(reduxThunk));
	let persistor = persistStore(store);
	return { store, persistor };
};
