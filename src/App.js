import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from "./pages/Home/index"
import Update from './pages/Update'
import Create from './pages/create'
import Details from './pages/Details'
function App() {
  return (
    <>
    <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/details" element={<Details/>} />
              <Route path="/update" element={<Update/>} />
              <Route path="/create" element={<Create/>} />
              <Route path="/users" element={<div>users</div>} />
            </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
