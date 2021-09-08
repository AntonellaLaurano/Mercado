import { Provider } from 'react-redux';
import './App.css';
import AppRouter from './routers/AppRouter';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider> 
  );
}

export default App;
