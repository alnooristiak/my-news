import React from 'react';

const NewsItem = () => {
    return (
        <div>
            <div class="card" style={{width: '18rem'}}>
                <img src="https://static.foxnews.com/foxnews.com/content/uploads/2022/08/0805-DEATH-VALLEY-FLOODING-NEW-VIDEO-2.jpg" class="card-img-top img-fluid" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;