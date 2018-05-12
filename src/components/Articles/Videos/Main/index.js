import React from 'react';
import VideoList from '../../../widgets/VideoList/videolist';

const VideosMain = () => (
    <VideoList
        type="card"
        title={false}
        loadmore={true}
        start={0}
        amount={10}
    />
)

export default VideosMain;