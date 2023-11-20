import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './ui-components/Login'
import Signup from './ui-components/Signup'
import Main from './ui-components/Main'
import Addpost from './Elements/Addpost'
import Viewall from './Elements/Viewall'
import Myprofile from './Elements/Myprofile'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/add' element={<Main child={<Addpost/>}/>}/>
        <Route path='/view' element={<Main child={<Viewall/>}/>}/>
        <Route path='/profile' element={<Main child={<Myprofile/>}/>}/>
      </Routes>
    </div>
  )
}

export default App
