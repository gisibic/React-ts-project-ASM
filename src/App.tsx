import { useState } from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import UserLayout from './component/layout/user'
import AdminLayout from './component/layout/admin'
import Product from './component/product'

function App() {
 

  return <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout/>}>
            <Route index element={<Product/>}/>
            <Route path='chi-tiet' element={<h1>Chi tiet san pham</h1>}/>
        </Route>
        {/* <Route path='/admin' element={<AdminLayout/>}>
            <Route index element={<h1>Admin dashboard</h1>}/>
            <Route path='/product' element={<h1>Admin san pham</h1>}/>
        </Route> */}
      </Routes>
  </BrowserRouter>
}

export default App
