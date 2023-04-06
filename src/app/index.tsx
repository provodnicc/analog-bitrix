import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from '../pages';

import './App.scss';


function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
