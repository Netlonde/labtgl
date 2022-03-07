import { Container } from '@assets/styles/GlobalStyles';
import AppRoutes from './routes';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from '@store/StoreRedux';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <AppRoutes />
        <ToastContainer autoClose={3000} className="toast-container" />
      </Container>
    </Provider>
  );
}

export default App;
