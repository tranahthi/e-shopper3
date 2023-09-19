import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header';
import Sidebar from './Components/Layout/Sidebar';
import Footer from './Components/Layout/Footer';

function App(props) {
  return (


    <div>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-sm-3'>
            <Sidebar />
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
