import React, { Component } from 'react';
import './App.css';
import Password from './Password';
import PasswordList from './Password-List'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const PASSWORD_STATE = "PASSWORD_STATE"

// Load State From Local Storage
export const loadState= () => {
  try {
    const serializedState = localStorage.getItem(PASSWORD_STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

// Save State To Local Storage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(PASSWORD_STATE, serializedState)
  } catch(err) {
    console.log("Error saving data:"+err)
  }
}

// Initalize Store
const persistedState = loadState();
const store = createStore(reducers, persistedState)
store.subscribe(() => {
  saveState(store.getState())
})


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Password />
        </div>
        <div className="App">
          <PasswordList />
        </div>
      </Provider>
    );
  }
}

export default App;
