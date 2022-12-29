import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Data from './Components/Data'
import User from './Components/User'
const App = () => {
  return (
        <BrowserRouter>
          <Home></Home>
          <Routes>
            <Route path='/data' element={<Data/>}></Route>
            <Route path='/user' element={<User/>}></Route>

          </Routes>
        </BrowserRouter>
  )
}

export default App