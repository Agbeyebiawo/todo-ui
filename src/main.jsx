import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import TodoContext from './context/TodoContext.jsx'

import store from './app/store.jsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <TodoContext> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </TodoContext> */}
  </React.StrictMode>,
)
