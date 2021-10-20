import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux';
import {store, persistor} from './redux/createStore';
import {PersistGate} from "redux-persist/integration/react";

// style
import "./assets/App.scss";

// App
import App from './App';

const Loading =()=>{
  return (
    <div>loading...</div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate loading={<Loading />} persistor= {persistor}>
        <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);