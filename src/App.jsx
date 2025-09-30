import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Tours from './components/Tours';
import Footer from './components/Footer';

function App() {


  return (
    <div style={{minWidth:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <Header/>
      <Tours/>
      <Footer/>
    </div>
  )
}

export default App