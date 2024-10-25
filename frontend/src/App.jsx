import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

// import HomeScreen from './pages/HomeScreen'
import { Outlet } from 'react-router-dom'



const App = () => {
 
  return (
    <>
     <Header/>
     <main className='min-h-lvh'>

      <div className='container mx-auto'>

       {/* <HomeScreen/> */}
       <Outlet />
          
      </div>

     </main>
     <Footer/>
    </>
  )
}

export default App