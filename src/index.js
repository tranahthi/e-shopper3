// import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Content/Home'
import ProductDetail from './Components/Content/ProductDetail';
import Blog from './Components/Content/Blog/Blog';
import BlogDetail from './Components/Content/Blog/BogDetail';
import Register from './Components/Content/Member/Register';
import Login from './Components/Content/Member/Login';
import Index from './Components/Content/Member';
import Account from './Components/Content/Member/Account';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
            <Route index path='/' element={<Home/>}/>
            <Route path='/productdetail' element={<ProductDetail/>}/>
            <Route path='/blog'  element={<Blog/>} />
            <Route path='/blog/detail/:id' element={<BlogDetail/>}/>

            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/account' element={<Account/>}/>
            {/* <Route path='/index' element={<Index/>}/> */}
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
