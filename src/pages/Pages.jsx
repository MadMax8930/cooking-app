import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { Route, Routes } from 'react-router-dom'; 

function Pages() {
  return (
      <Routes>  
        <Route path="/" element={<Home/>}/>
        <Route path="/cuisine/:type" element={<Cuisine/>}/>
        <Route path="/searched/:search" element={<Searched/>}/>
        <Route path="/recipe/:name" element={<Recipe/>}/>
      </Routes>
  )
}

// /cuisine only looking for /cuisine
// /searched only looking for /searched

// BrowserRouter : gives the ability for the routes to work (moved to App.jsx)
// Routes : intelligent component that looks at the paths and figures out which route to render out

export default Pages