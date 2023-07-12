import React from 'react'
import './assets/styles/bootstrap.custom.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import HomeScreen from './screens/HomeScreen'
import { Provider } from 'react-redux'
import store from './store'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProductScreen from './screens/ProductScreen'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index={true} path="/" element={<HomeScreen/>} />
      <Route path='/product/:id' element={<ProductScreen/>}/>
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
