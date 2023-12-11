import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import Home from './Pages/Home';
import HeartPage from './Pages/HeartPage';


function App() {


  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/"  element={ <AboutPage/> }  />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/Signup" element={ <SignupPage/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/heartPage" element={ <HeartPage/>  } />
        
      </Routes>
    </Router>
  </div>
  );
}

export default App
