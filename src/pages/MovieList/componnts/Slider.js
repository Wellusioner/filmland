import React, { useEffect } from 'react';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Actions from 'redux/actions'
import get from 'lodash.get'
import { Skeleton } from 'components'

const params = {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
};

const Slider = () => {

    const dispatch = useDispatch();
    const { slider: { isFetched, movies } } = useSelector( state => state);



    useEffect(() => {
        dispatch(Actions.FETCH_SLIDER.request());
    },[dispatch]);

    return (
        <div className={'main-slider py-5 has-bg'}
             style={{
                 backgroundImage: `url(${require('../../../assets/images/collection.jpg')})`
             }}
        >
            {
                !isFetched && !movies.length ?
                    <div className={'container'}>
                        <Skeleton.MovieSingle />
                    </div>
                    : null
            }
            {
                movies.length ?
                    <Swiper {...params}>
                        {
                            movies.map((movie,key) => (
                                <div key={key} className={'slider-item'}>
                                    <div className="container">
                                        <div className={'text-light'}>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <img src={get(movie,'files.poster_url','')} alt=""/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className={'text-light'}>
                                                        <div className={'slider-title text-uppercase mb-4'}>{get(movie,'title','')}</div>
                                                        <div className="slider-description mb-5">
                                                            { get(movie,'description','') }
                                                        </div>
                                                        <Link className={'btn btn-light rounded-0'} to={`/movie/${get(movie,'id','')}`}>Смотрите онлайн</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Swiper>
                    : null
            }
        </div>
    )
};
export default Slider;