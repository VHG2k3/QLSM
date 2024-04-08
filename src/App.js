import "./css/sidebar.css"
import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import CategoriesManagement from "./component/CategoriesManagement";
import NewsManagement from "./component/NewsManagement";
import Product_Management from "./component/Product_Management";



const App = () => {
  return (
      <div>
           <BrowserRouter>
                <Routes>
                        <Route path='/home' element={<Home/>}></Route>
                        <Route path='/product' element={<Product_Management/>}></Route>
                        <Route path='/categories' element={<CategoriesManagement/>}></Route>
                        <Route path='/news' element={<NewsManagement/>}></Route>
                    <Route path="/" element={<Login/>}></Route>
                </Routes>
          </BrowserRouter>
          
      </div>
  );
};

export default App;
