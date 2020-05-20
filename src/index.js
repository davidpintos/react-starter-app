import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './configure-store';
import { GeneralContainer } from './components/GeneralContainer';

const App = () => (
  <Provider store={store}>
    <GeneralContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
