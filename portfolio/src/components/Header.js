import NavTabs from './Navigation';
import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


export default function Header(){
    
        const [currentPage, setCurrentPage] = useState('Home');
      
        
        const renderPage = () => {
          if (currentPage === 'Home') {
            return <Home />;
          }
          if (currentPage === 'About') {
            return <About />;
          }
          if (currentPage === 'Portfolio') {
            return <Portfolio />;
          }
          return <Contact />;
        };
        const handlePageChange = (page) => setCurrentPage(page);
      
        return (
         
            <header>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
         
            {renderPage()}

            </header>
          
        );  
      
};

    



