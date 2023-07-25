import React from 'react'
import './assets/styles/bootstrap.custom.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import { Provider } from 'react-redux'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import store from './store'
import PrivateRoute from './components/PrivateRoute'
import AdminRoute from './components/AdminRoute'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceorderScreen from './screens/PlaceorderScreen'
import OrderScreen from './screens/OrderScreen'
import ProfileScreen from './screens/ProfileScreen'
import OrderListScreen from './screens/admin/OrderListScreen'
import ProductListScreen from './screens/admin/ProductListScreen'
import ProductEditScreen from './screens/admin/ProductEditScreen'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index={true} path="/" element={<HomeScreen/>} />
      <Route path='/product/:id' element={<ProductScreen/>}/>
      <Route path='/cart' element={<CartScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
     
      <Route path='' element={<PrivateRoute/>}>
      <Route path='/shipping' element={<ShippingScreen/>}/>
      <Route path='/payment' element={<PaymentScreen/>}/>
      <Route path='/placeorder' element={<PlaceorderScreen/>}/>
      <Route path='/order/:id' element={<OrderScreen/>}/>
      <Route path='/profile' element={<ProfileScreen/>}/>
      </Route>

      <Route path='' element={<AdminRoute/>}>
      <Route path='/admin/orderlist' element={<OrderListScreen/>}/>
      <Route path='/admin/productlist' element={<ProductListScreen/>}/>
      <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>}/>
      </Route>

    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
      <RouterProvider router={router}/>
      </PayPalScriptProvider>
   
    </Provider>
  </React.StrictMode>,
)
