import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
<link rel="stylesheet" href="style.css" />
createRoot(document.getElementById('root')).render(
   <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
)
