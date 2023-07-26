import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import PropTypes from 'prop-types';

const Card = (props) => {
    const { store, actions } = useContext(Context);
    const { idCard } = useParams();
    const imageToDisplay = props?.uid === "1" && props?.category === "planets" ? `https://i1.wp.com/www.sinembargo.mx/wp-content/uploads/2014/07/tatooine.jpg?w=570&quality=80&strip=all&ssl=1` : `https://starwars-visualguide.com/assets/img/${(props?.category === "people" ? "characters" : props?.category)}/${props?.uid}.jpg`;


    // Estado para controlar si el corazón está seleccionado o no
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        // Cambia el estado del corazón cuando se presiona
        setIsFavorite(!isFavorite);

        // Agrega o elimina el nombre del personaje a la lista de favoritos
        if (!isFavorite) {
            actions.addFavorites(props?.name);
        } else {
            actions.deleteFavorites(props?.name);
        }
    };

    return (
        <div className="card mb-5 mx-2" style={{ width: "18rem" }}>
            <img src={imageToDisplay} className="card-img-top w-100" alt="A Picture From Far Far Away" style={{ height: "396px" }} />
            <div className="card-body">
                <h5 className="card-title">{props?.name}</h5>
                {(props?.category === "people") ?
                    (<><p className="card-text">Gender: {props?.gender}</p><p className="card-text">Hair Color: {props?.hairColor}</p><p className="card-text">Eye Color: {props?.eyeColor}</p></>) :
                ((props?.category === "planets") ?
                    (<><p className="card-text">Population: {props?.population}</p><p className="card-text">Terrain: {props?.terrain}</p><p className="card-text">Climate: {props?.climate}</p></>) :
                
                    (<><p className="card-text">Vehicle Class: {props?.vehicleClass}</p><p className="card-text">Cargo Capacity: {props?.cargoCapacity}</p><p className="card-text">Max Atmosphering Speed: {props?.maxAtmospheringSpeed}</p></>)
                    )
                }
                <Link to={`/${props?.category}/${props?.uid}`}><button className='btn btn-outline-primary'>Learn More!</button></Link>
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
