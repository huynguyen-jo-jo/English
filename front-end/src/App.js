
import './App.css';
import ShortMoment from './componant/ShortMoment'

import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ShortMoment/>} path="/short-moment"/>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
