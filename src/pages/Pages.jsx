import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { Route, Routes, useLocation } from 'react-router-dom'; 
import { AnimatePresence } from 'framer-motion';

function Pages() {
  const location = useLocation(); // To see when the page/component is getting mounted/unmounted (for Routing)
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>  
        <Route path="/" element={<Home/>}/>
        <Route path="/cuisine/:type" element={<Cuisine/>}/>
        <Route path="/searched/:search" element={<Searched/>}/>
        <Route path="/recipe/:name" element={<Recipe/>}/>
      </Routes>
    </AnimatePresence>
  )
}

// /cuisine only looking for /cuisine
// /searched only looking for /searched

// BrowserRouter : gives the ability for the routes to work (moved to App.jsx)
// Routes : intelligent component that looks at the paths and figures out which route to render out

export default Pages