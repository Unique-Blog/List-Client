//부트스트랩 라이브러리 import

import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalBackground } from './style';

//pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import NewLoginPage from './pages/NewLoginPage/NewLoginPage';
function App() {

  return (
      <GlobalBackground>
        <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/HomePage" element={<HomePage/>} />
            <Route path="/NewLoginPage" element={<NewLoginPage/>} />
          </Routes>
        </Router>
      </GlobalBackground>
  );
}

export default App;
