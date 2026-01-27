import react from 'react';
import CarouselPrincipal from './card';
import CardProducto from './card';

function Bienvenida() {

    return (
        <div>
            <div className='row'>
                <div className='col-xl-12'>
                    <br />
                    <h2 className='text-center'><strong>Productos destacados</strong></h2>
                    <br />
                </div>
            </div>

            <div className='row'>
                <div className='col-xl-3'>
                    <CardProducto titulo='Lataffa' desc='Body Spray Armaf Odyssey Odyssey Home For Men 200 Ml'/>
                </div>
                <div className='col-xl-3'>
                    <CardProducto titulo='Lataffa' desc='Perfume Mujer Lattafa Yara Tous EDP 100 Ml'/>
                </div>
                <div className='col-xl-3'>
                    <CardProducto titulo='Lataffa' desc='Perfume Mujer Lattafa Fakhar Gold Extrait EDP 100 Ml'/>
                </div>
                <div className='col-xl-3'>
                    <CardProducto titulo='Lataffa' desc='Perfume Hombre Lattafa Ana Abiyedh Rouge EDP 60 Ml'/>
                </div>
            </div>
        </div>

    );

}

export default Bienvenida;