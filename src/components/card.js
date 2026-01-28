import react from 'react';

function CardProducto(props) {

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src="/images/perfume.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.desc}</p>
                <a href="#" className="btn btn-success">Ver detalles</a>
            </div>
        </div>
    );
}

export default CardProducto;