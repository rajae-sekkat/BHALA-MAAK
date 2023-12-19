import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import Home from './Pages/Home';
import HeartPage from './Pages/HeartPage';
import DemoPage from './Pages/DemoPage';


function App() {


  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/"  element={ <AboutPage/> }  />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/Demo" element={ <DemoPage/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/heartPage" element={ <HeartPage/>  } />
        
      </Routes>
    </Router>
  </div>
  );
}

export default App
