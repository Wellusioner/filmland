import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux'
import Actions from 'redux/actions'
import { Spinner, Skeleton } from "components";
import { Slider, MovieCard } from './componnts'
import get from 'lodash.get'

const List = ({ history }) => {
    const dispatch = useDispatch();
    const { list: { isFetched, data, error } } = useSelector(state => state);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(Actions.FETCH_ALL.request({
            page
        }));
        window.scrollTo({top: 600, behavior: 'smooth'});
    },[dispatch, page]);

    const handlePagination = index => {
        setPage(() => index);
        history.push({
            search: '?page=' + index
        })
    };

    return (
        <div className={'home-page'}>
            <Slider />
            <div className={'movie-list py-4'}>
                <div className="container">
                    <h2 className={'font-weight-normal border-bottom text-uppercase f-30 mb-5 pb-1'}>Movies</h2>
                    <Spinner spinning={!isFetched}>
                        <div className="row movie-group mb-4">
                            {
                                !isFetched && !get(data,'movies','').length ?
                                    Array.from(Array(16)).map((_,key) => (
                                        <div key={key} className="col-md-3 mb-5">
                                            <div className={'movie-item '}>
                                                <Skeleton.MovieCard />
                                            </div>
                                        </div>
                                    ))
                                    : null
                            }
                            {
                                get(data,'movies','').length ? get(data,'movies','').map((movie,key) => (
                                    <div key={key} className="col-md-3 mb-5">
                                        <MovieCard {...{ movie }}/>
                                    </div>
                                )) : <div className={'col font-weight-normal text-uppercase'}>Не найден</div>
                            }
                            {
                                error ?
                                    'Упс... Что то происходит не так'
                                    : null
                            }
                        </div>
                    </Spinner>
                    {
                        get(data,'total_items','') ?
                            <ReactPaginate
                                pageCount={get(data,'total_items','')}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={3}
                                onPageChange={val => handlePagination(val.selected + 1)}
                                initialPage={0}
                                previousLabel={<span>&#10094;</span>}
                                previousClassName={'page-item'}
                                previousLinkClassName={'page-link'}
                                nextClassName={'page-item'}
                                nextLinkClassName={'page-link'}
                                nextLabel={<span>&#10095;</span>}
                                containerClassName={'pagination'}
                                pageClassName={'page-item'}
                                pageLinkClassName={'page-link'}
                                activeLinkClassName={'bg-secondary text-white'}
                                breakClassName={'page-item'}
                                breakLinkClassName={'page-link'}
                                disabledClassName={'disabled'}
                            /> : null
                    }
                </div>
            </div>
        </div>
    );
};

export default List;