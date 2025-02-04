import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../src/components/Header/Header.jsx'
import Footer from '../src/components/Footer/Footer.jsx'
function Layout() {
    
  
    return (
      <>
        
        <Outlet /> 
        <Footer />
      </>
    );
}

export default Layout