import './App.scss';


import { Routes, Route } from "react-router-dom";
import Home from './page/Home/home';
import Service from './page/Service/service';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/service" element={<Service />} /> 
      </Routes>
    </>
  )
}

export default App;
