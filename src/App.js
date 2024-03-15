import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/home/Homepage';
import Personal from './pages/personal/personal';
import Comments from './pages/comments/comments';
function App() {
  
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/comments" element={<Comments/>} />
        </Routes>
      </BrowserRouter>
    );

}

export default App;
