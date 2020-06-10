import React from 'react';

const MovieSingle = () => {

    return (
        <div className={'skeleton'}>
            <div className="row">
                <div className="col-md-4">
                    <div className={'placeholder min-h-350 w-100'}> </div>
                </div>
                <div className="col-md-8">
                    <div className={'placeholder min-h-16 w-100 mt-2'}> </div>
                    <div className={'placeholder min-h-16 w-100 mt-2'}> </div>
                    <div className={'placeholder min-h-16 w-75 mt-2'}> </div>
                </div>
            </div>
        </div>
    );
};

export default MovieSingle;