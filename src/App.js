import './App.scss';


import { Routes, Route } from "react-router-dom";
import Home from './page/Home/home';
import Service from './page/Service/service';
import Products from './page/Products/products';
import Pricings from './page/Pricing/pricings';
import Post from './page/Post/post';
import Blogs from './page/Blogs/Blogs';
import Team from './page/Team/team';
import AboutUs from './page/AboutUs/aboutUs';
import Contact from './page/Contact/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} /> 
        <Route path="/products" element={<Products />} /> 
        <Route path="/pricing" element={<Pricings />} /> 
        <Route path="/blog" element={<Blogs />} /> 
        <Route path="/post" element={<Post />} /> 
        <Route path="/ourTeam" element={<Team />} /> 
        <Route path="/aboutUs" element={<AboutUs />} /> 
        <Route path="/contactUs" element={<Contact />} /> 
      </Routes>
    </>
  )
}

export default App;
