import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateAdd from './Pages/CreateAdd'
import Homepage from './Pages/Homepage'

const MainRoutes = () => {
  return (
    <>
      <Routes >
        <Route path="" element={<Homepage/>} />
        <Route path="/createadd" element={<CreateAdd/>} />
      </Routes>
    </>
  )
}

export default MainRoutes