import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import DemoPage from './Pages/DemoPage';
import VitalParameterPage from './Pages/VitalParameterPage';
import LocationPage from './Pages/LocationPage';
import CalenderPage from './Pages/CalenderPage';




function App() {


  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/"  element={ <AboutPage/> }  />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/Demo" element={ <DemoPage/> } />
        <Route path="/VitalParameterPage" element={ <VitalParameterPage/>  } />
        <Route path='/LocationPage' element={<LocationPage/>}/>
        <Route path='/Calender' element={<CalenderPage/>}/>
        
        
      </Routes>
    </Router>
  </div>
  );
}

export default App
