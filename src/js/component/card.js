import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import PropTypes from 'prop-types';

const Card = ({ name, uid, category }) => {
    const { store, actions } = useContext(Context);
    const { idCard } = useParams();
    const imageToDisplay = uid === "1" && category === "planets" ? `https://i1.wp.com/www.sinembargo.mx/wp-content/uploads/2014/07/tatooine.jpg?w=570&quality=80&strip=all&ssl=1` : `https://starwars-visualguide.com/assets/img/${(category === "people" ? "characters" : category)}/${uid}.jpg`;

    // Define el tamaño fijo para todas las imágenes (en pixeles)
    const imageWidth = 200;
    const imageHeight = 300;

    // Estado para controlar si el corazón está seleccionado o no
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        // Cambia el estado del corazón cuando se presiona
        setIsFavorite(!isFavorite);

        // Agrega o elimina el nombre del personaje a la lista de favoritos
        if (!isFavorite) {
            actions.addFavorites(name);
        } else {
            actions.deleteFavorites(name);
        }
    };

    return (
        <div className="card mb-5 mx-2" style={{ width: "18rem" }}>
            <img src={imageToDisplay} className="card-img-top" alt="A Picture From Far Far Away" style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {(category === "people") ?
                    (<><p className="card-text">A person within the Star Wars universe</p></>) :
                    ((category === "planets") ?
                        (<><p className="card-text">A planet within the Star Wars universe</p></>) :
                        (<><p className="card-text">A vehicle within the Star Wars universe</p></>)
                    )
                }
                <Link to={`/${category}/${uid}`}><button className='btn btn-outline-primary'>Learn More!</button></Link>
                <button className={`btn ${isFavorite ? "btn-danger" : "btn-outline-warning"}`} onClick={handleFavoriteClick}>
                    <i className={`far ${isFavorite ? "fa-heart" : "fa-heart"}`}></i>
                </button>
            </div>
        </div>
    )
};

Card.propTypes = {
    category: PropTypes.string,
}

export default Card;
