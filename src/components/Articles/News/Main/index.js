import React from 'react';

import NewsSlider from '../../../widgets/NewsSlider/slider';
import NewsList from '../../../widgets/NewsList/newslist';

const NewsMain = () => {
    return (
        <div>
            <NewsSlider 
                type='featured'
                settings={{dots:false}}
                start={0}
                amount={3}
            />

            <NewsList 
                type="card"
                loadMore={true}
                start={0}
                amount={10}
            />
        </div>
    );
};

export default NewsMain;