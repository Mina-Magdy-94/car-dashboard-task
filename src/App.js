import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import ErrorPage from './pages/ErrorPage';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='booking' element={<Booking/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
