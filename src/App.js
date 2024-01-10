import './output.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/Home'
import Phone from './routes/Phone';


function App() {
  return (
    <div className='w-screen h-screen font-halvetica bg-app-bg'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/home'
            element=<Home />
          />
          <Route
            path='/phone'
            element=<Phone />
          />
          
          <Route
            path='*'
            element=<Navigate to='/home' />
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;