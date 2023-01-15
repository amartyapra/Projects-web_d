import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Results } from './Results';


export const Routess = () => {
  return (
    <div className="p-4">
    <Routes>
      <Route exact path='/' element={<Navigate to="/search"></Navigate>}>
      
      </Route>
      <Route exact={true} path='/search' element={<Results/>}>
      </Route>
      <Route exact={true} path='/image' element={<Results/>}>
      </Route>
      <Route exact={true} path='/news' element={<Results/>}>
      </Route>
      <Route exact={true} path='/videos' element={<Results/>}>
      </Route>
    </Routes>
    </div>
  );
}
