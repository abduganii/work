import './App.scss';


import { Routes, Route } from "react-router-dom";
import Home from './page/Home/home';
import Service from './page/Service/service';
import Products from './page/Products/products';
import Pricings from './page/Pricing/pricings';
import Blog from './page/Blog/blog';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/service" element={<Service />} /> 
         <Route path="/products" element={<Products />} /> 
         <Route path="/pricing" element={<Pricings />} /> 
         <Route path="/blog" element={<Blog />} /> 
      </Routes>
    </>
  )
}

export default App;
