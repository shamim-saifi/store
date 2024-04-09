import {
	ChakraProvider,
	ColorModeScript,
	theme,
	extendTheme,
	withDefaultColorScheme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Provider } from 'react-redux';
import Store from './Redux/Store';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

export const server = 'https://store-server-ruddy.vercel.app/api/v1';
// export const server = 'http://localhost:1000/api/v1';


// const mytheme = extendTheme(
// 	withDefaultColorScheme({ colorScheme: 'white' }) 
// ); 

root.render(
	<StrictMode>
		<Provider store={Store}>
			<ChakraProvider theme={theme}>
				<ColorModeScript />
				{/* <ColorModeSwitcher /> */}
				<App />
			</ChakraProvider>
		</Provider>
	</StrictMode>
);
