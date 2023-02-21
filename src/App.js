import './index.css';
import store from './lib/store';
import { Provider } from 'react-redux';
import InboxScreen from './components/InboxScreen';
import { Button } from '@harikrishkk/component-library';

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
      <Button variant="primary" size="medium">
        Log in / Register
      </Button>
    </Provider>
  );
}
export default App;
