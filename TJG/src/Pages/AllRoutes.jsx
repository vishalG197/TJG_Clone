import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'

const AllRoutes = () => {
  return (
<Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    {/* <Route path='/dashboard' element={<Dashboard />} /> */}
</Routes>  )
}

export default AllRoutes