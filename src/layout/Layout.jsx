import {Outlet, Link, useLocation} from "react-router-dom"
import { useState } from "react"

const Layout = () => {
  const location = useLocation()
  const urlActual=location.pathname
  

  return (
    <div className="md:flex md:w-screen md:h-screen bg-gray-300">

      <div className="w-1/4 shadow-xl h-full flex-col justify-center content-center">
        <img src="https://www.depilife.com.ar/public/img/depilife-logo/depilife-logo.png" className='h-16 mx-auto mt-4'/>

        <nav className="mt-10">
          <Link 
          to="/"
          className={urlActual==="/"?"block text-center text-2xl text-gray-600 border-y border-gray-600 p-3 bg-gray-400 ":"block text-center text-2xl text-gray-600 border-y border-gray-400 p-1 hover:bg-gray-400 "}>
            Clientes
          </Link>

          <Link 
          to="/nuevo"
          className={urlActual==="/nuevo"?"block text-center text-2xl text-gray-600 border-y border-gray-600 p-3 bg-gray-400 ":"block text-center text-2xl text-gray-600 border-y border-gray-400 p-1 hover:bg-gray-400 "}>
            Agregar Cliente
          </Link>

        </nav>
      </div>

      <div className="w-3/4 shadow-xl h-full overflow-y-scroll">
        <Outlet/>
      </div>
  
      
    </div>
  )
}

export default Layout