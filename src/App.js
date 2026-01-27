import logo from './logo.svg';
import './App.css';
import Bienvenida from './components/bienvenida';
import NavBarPrincipal from './components/navbar';
import CarouselPrincipal from './components/carousel';
import './style.css';
import Footer from './components/footer';


function App() {

  return (
    <div>
      <NavBarPrincipal/>
      <CarouselPrincipal/>
      <div className='container'>

        <Bienvenida />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
