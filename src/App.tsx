import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ReduxProvider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { persistor, store } from './redux/store';

function App() {
  return (
    <>
      <GlobalStyle />
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </ReduxProvider>
    </>
  );
}

export default App;
