import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({ movie }) => {
    const { id, title, files: { poster_url }, params: { is_new } } = movie;
    return (
        <Link className={'movie-item has-effect text-decoration-none position-relative d-block'} to={`/movie/${id}`}>
            <img className={'movie-img w-100'} src={poster_url} alt={title}/>
            { is_new && <img className={'new-movie'} src={require('../../../assets/images/new.svg')} alt=""/> }
            <div className={'movie-body d-flex'}>
                <div className={'movie-title text-white'}>{title}</div>
            </div>
        </Link>
    );

};

export default MovieCard;