// import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Content/Home'
import ProductDetail from './Components/Content/ProductDetail';
import Blog from './Components/Content/Blog';
import BlogDetail from './Components/Content/BogDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
            <Route index path='/' element={<Home/>}/>
            <Route path='/productdetail' element={<ProductDetail/>}/>
            <Route path='/blog'  element={<Blog/>} />
            <Route path='/blogdetail' element={<BlogDetail/>}/>
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
