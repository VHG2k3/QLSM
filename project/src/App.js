
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from './components/Menu';
import Home from './components/Home';
import Categories from './components/Categories';
import News from './components/News';


function App() {
  return (
    <div className="container">
          <header>
              <img src="https://devmaster.edu.vn/images/logo.png" alt=""/>
          </header>
          <BrowserRouter>
             <section>
                <Menu/>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/categories" element={<Categories></Categories>}></Route>
                    <Route path="/news" element={<News/>}></Route>
                </Routes>
            </section>
          </BrowserRouter>
         
    </div>
  );
}

export default App;
