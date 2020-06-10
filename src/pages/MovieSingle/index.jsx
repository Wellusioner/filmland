import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Player from 'react-player'
import Actions from 'redux/actions'
import get from 'lodash.get'
import { Skeleton } from 'components'

const Single = ({ match }) => {
    const dispatch = useDispatch();
    const { params: { id }} = match;
    const { single: { isFetched, movie, error } } = useSelector(state => state);

    useEffect(() => {
        dispatch(Actions.FETCH_ONE.request({ id }));
    },[dispatch, id]);

    return (
        <div className={'movie-single py-5'}>
            <div className="container">
                {
                    !isFetched
                        ? <Skeleton.MovieSingle />
                        : null
                }

                {
                    Object.values(movie).length > 0 ?
                        <div className={'single-box'}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div><img className={'w-100'} src={get(movie,'files.poster_url','')} alt=""/></div>
                                </div>
                                <div className="col-md-8">
                                    <div className={'single-box'}>
                                        <h1 className="font-weight-normal mb-4">{get(movie,'title','')}</h1>
                                        <div className={'mb-3'}><span className={'font-weight-bolder'}>Год:</span> {get(movie,'year','')}</div>
                                        <div className={'mb-3'}><span className={'font-weight-bolder'}>Country:</span> {get(movie,'countries_str','')}</div>
                                        <div className={'mb-3'}><span className={'font-weight-bolder'}>Жанр:</span> {get(movie,'genres_str','')}</div>
                                        <p>{ get(movie,'description','') }</p>
                                    </div>
                                </div>
                            </div>
                            <div className={'actors py-4'}>
                                <h3 className={'font-weight-light'}>Актёры</h3>
                                <div className="row">
                                    {
                                        get(movie,'actors',[]).length > 0
                                        ? get(movie,'actors',[]).map((actor,key) => get(actor,'photo_url','') && (
                                            <div key={key} className="col-md-1 mb-3">
                                                <img
                                                    title={get(actor,'name','')}
                                                    className={'w-100'}
                                                    src={get(actor,'photo_url','')}
                                                    alt={get(actor,'name','')}
                                                />
                                            </div>
                                        ))
                                        : <div className={'col'}>Не найден</div>
                                    }
                                </div>
                            </div>
                            <div className="movie-player">
                                <h4 className={'font-weight-light'}>Смотрите онлайн</h4>
                                {
                                    isFetched && get(movie,'files.video_hd.video_url','')
                                    ? <Player
                                        url={get(movie,'files.video_hd.video_url','')}
                                        controls
                                    />
                                    : 'Не найден'
                                }
                            </div>
                        </div>
                        : null
                }
                {
                    error ?
                        'Упс... Что то происходит не так'
                        : null
                }
            </div>
        </div>
    );
};

export default Single;