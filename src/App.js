import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store/store';

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
