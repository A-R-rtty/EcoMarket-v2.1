import logo from './logo.svg';
import './App.css';
import Bienvenida from './components/bienvenida';
import NavBarPrincipal from './components/navbar';
import CarouselPrincipal from './components/carousel';
import './style.css';
import Footer from './components/footer';
import CardNosotros from './components/cardNosotros';


function App() {

  return (
    <div>
      <NavBarPrincipal/>
      <CarouselPrincipal/>
      <div className='container'>

        <Bienvenida />
      </div>
      <div>
      </div>
        <CardNosotros/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
