import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'theme/styles/styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from 'theme/contexts/themeContext';
import { AuthContextProvider } from 'theme/contexts/authContext';
import { store } from 'shared/redux/store';
import 'theme/i18n';

const children = (
	<AuthContextProvider>
		<ThemeContextProvider>
			<Provider store={store}>
				<Router>
					<React.StrictMode>
						<App />
					</React.StrictMode>
				</Router>
			</Provider>
		</ThemeContextProvider>
	</AuthContextProvider>
);

const container = document.getElementById('root');

createRoot(container as Element).render(children);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
