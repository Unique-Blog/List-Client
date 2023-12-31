//부트스트랩 라이브러리 import
import './App.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalBackground } from './style';

//pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import NewLoginPage from './pages/NewLoginPage/NewLoginPage';
import ToDoListPage from './pages/ToDoListPage/ToDoListPage';
import BucketListPage from './pages/BucketListPage/BucketListPage';

function App() {

  return (
      <GlobalBackground>
        <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/HomePage" element={<HomePage/>} />
            <Route path="/ToDoListPage" element={<ToDoListPage/>} />
            <Route path="/NewLoginPage" element={<NewLoginPage/>} />
            <Route path="/BucketListPage" element={<BucketListPage/>} />
          </Routes>
        </Router>
      </GlobalBackground>
  );
}

export default App;
