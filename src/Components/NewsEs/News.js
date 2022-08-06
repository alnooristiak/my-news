import React from 'react';
import NewsItem from './NewsItem';

const News = () => {
    return (
        <div className='container py-3'>
            <div className="row">
                <div className="py-2">
                    <h3>MY NEWS <span className='text-primary'>Resent News</span> </h3>
                    <p>sum text added</p>
                </div>
                <div className="col-md-4">
                    <NewsItem />
                </div>
                <div className="col-md-4">
                    <NewsItem />
                </div>
                <div className="col-md-4">
                    <NewsItem />
                </div>
            </div>
        </div>
    );
};

export default News;