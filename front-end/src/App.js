
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css';
import ShortMoment from './componant/ShortMoment'
import Login from './componant/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ShortMoment/>} path="/short-moment"/>
          <Route element={<Login/>} path="/login"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
