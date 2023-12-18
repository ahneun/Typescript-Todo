import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './config/configStore';
import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <App /> {/* 여기서 App은 Redux 스토어에 접근해야 하는 컴포넌트일 것입니다. */}
  </Provider>,
  document.getElementById('root')
);