import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import KeralaCountdown from './Component/KeralaCountdown';

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
