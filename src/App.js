import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header';
import Sidebar from './Components/Layout/Sidebar';
import Footer from './Components/Layout/Footer';
import { useLocation } from 'react-router-dom';
import SidebarAccount from './Components/Layout/SidebarAccount';

function App(props) {

  let params1 = useLocation()
  return (


    <div>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-sm-3'>
          {params1['pathname'].includes("account") ? <SidebarAccount/> : <Sidebar />}
          </div>
          <div className='col-sm-9'>
            {props.children}
          </div>
        </div>
      </div>

      <Footer />
    </div>


  );
}

export default App;
