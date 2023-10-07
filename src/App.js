//부트스트랩 라이브러리 import
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalBackground } from './style';

//pages
import Login from './pages/LoginPage/LoginPage';
function App() {

  return (
      <GlobalBackground>
        <Login/>
      </GlobalBackground>
  );
}

export default App;
