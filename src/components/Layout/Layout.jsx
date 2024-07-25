import {Outlet} from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/navbar'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4">
        <Outlet />
      </div>

    <Footer/>

    </>
  )
}
