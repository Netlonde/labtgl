import { Container } from '@assets/styles/GlobalStyles';
import AppRoutes from './routes';
import { Provider } from 'react-redux';
import store from '@store/AuthRedux';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <AppRoutes />
      </Container>
    </Provider>
  );
}

export default App;
