import logo from './logo.svg';
import Login from "./pages/Login"
import Register from "./pages/Register"

import './style.css';
import { BrowserRouter,
Routes,
Route, } from "react-router-dom"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
