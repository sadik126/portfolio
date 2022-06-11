import React from 'react';

import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div>
            <ReactLoading type={'cylon'} color={'orangered'} height={667} width={375} />
        </div>
    );
};

export default Loading;