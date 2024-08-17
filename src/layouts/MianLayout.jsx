import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const MianLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <ToastContainer/>
    </>
  )
}

export default MianLayout
