import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import Home from './Pages/Home';

import DemoPage from './Pages/DemoPage';
import VitalParameterPage from './Pages/VitalParameterPage';
import HeartRatePage from './Pages/HeartRatePage';
import TemperaturePage from './Pages/temperaturePage';


function App() {


  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/"  element={ <AboutPage/> }  />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/Demo" element={ <DemoPage/> } />
        <Route path="/VitalParameterPage" element={ <VitalParameterPage/>  } />
        <Route path="/HeartRatePage" element={ <HeartRatePage/> } />
        <Route path="/TemperaturePage" element={ <TemperaturePage/> } />
        
      </Routes>
    </Router>
  </div>
  );
}

export default App
