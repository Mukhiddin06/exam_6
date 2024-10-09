import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { Route, Routes } from 'react-router-dom'
import { AddTeacher, Billing, Dashboard, Exams, Features, Settings, SingleTeacher, Students, Teachers } from '../pages'

function DashboardRoutes() {
  return (
    <div className='flex'>
      <Navbar/>
      <div className='w-[80%]'>
        <Header/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/teachers' element={<Teachers/>}/>
          <Route path='/teachers/add' element={<AddTeacher/>}/>
          <Route path='/teachers/:id' element={<SingleTeacher/>}/>
          <Route path='/teachers/:id/uptade' element={<AddTeacher/>}/>
          <Route path='/students' element={<Students/>}/>
          <Route path='/billing' element={<Billing/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/exams' element={<Exams/>}/>
          <Route path='/features' element={<Features/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default DashboardRoutes