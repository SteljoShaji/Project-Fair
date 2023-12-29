import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import PFHome from './Pages/PFHome';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashbord from './Pages/Dashbord';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';
import Auth from './Components/Auth';


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<PFHome/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth register/>} />
        <Route path='/dashbord' element={ <Dashbord/>} />
        <Route path='/projects' element={ <Projects/>} />
        <Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
