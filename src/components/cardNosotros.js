import react from 'react';

function CardNosotros() {
    return (
        <div style={{ minHeight: '100vh', padding: '38px 0' }}>
            <div style={{ background: '#A4E5D2', maxWidth: 950, margin: 'auto', borderRadius: 16, boxShadow: '0 5px 28px #ccb', padding: 36 }}>
                <h2 className='text-center' style={{ fontFamily: '"Playfair Display, serif"', marginBottom: 7 }}>
                    Sobre Nosotros
                </h2>
                <div className='row mt-5' style={{ color: '#333', maxWidth: 700, fontSize: 17, marginBottom: 26, lineHeight: '1.7' }}>
                    <div className='col-xl-6'>
                        <img className="rounded" src="images/Productos-nat.png" alt="" style={{ width: '100%' }} />
                    </div>
                    <div className='col-xl-6'>
                        <p><strong>EcoMarket</strong> está dedicada a la venta de productos naturales, ecológicos y sustentables para
                            el hogar y el cuidado personal.</p>
                        <ul>
                            <li>Apoyamos a productores de nuestras marcas naturales y ecológicas</li>
                            <li>Promovemos prácticas sustentables, con envases reciclables y transporte eficiente para reducir la huella
                                de carbono.</li>
                            <li>Creemos en un comercio justo y en el impacto social: parte de las compras apoya talleres, cursos y
                                donaciones comunitarias.</li>
                        </ul>
                        <br /><br />
                    </div>
                </div>
                <div className='d-grid gap-2 col-6 mx-auto'>
                    <a href="Nosotros.html" className="btn btn-outline-success"><i className="fa-solid fa-users"></i> Conoce Más Sobre
                        Nosotros</a>
                </div>
            </div>
        </div>

    );
}

export default CardNosotros;