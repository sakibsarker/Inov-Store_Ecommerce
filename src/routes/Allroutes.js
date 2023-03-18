import {Route,Routes} from 'react-router-dom'
import { HomePage, ProductsList } from '../pages'
export const Allroutes = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path='/productslist' element={<ProductsList/>}/>
   </Routes>
   </>
  )
}
