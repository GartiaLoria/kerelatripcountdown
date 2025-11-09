import './App.css';
import KeralaCountdown from './keralaCountdown';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<KeralaCountdown/>}/>
    </Routes> 
    </BrowserRouter>
   </>
  );
}

export default App;
