import './App.css';
import Edit from './Edit'

import { BrowserRouter, Routes, Route } from 'react-router.dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter> 
        <div className="App">
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
       </Routes>
  
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
