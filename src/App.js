import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header';
import Sidebar from './Components/Layout/Sidebar';
import Footer from './Components/Layout/Footer';

function App(props) {
  return (
   
     
      <div>
        <Header/>
        {props.children}
        <Footer/>
      </div>
   
   
  );
}

export default App;
