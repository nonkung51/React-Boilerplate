import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './reducers/configureStore';

const { store, persistor } = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
