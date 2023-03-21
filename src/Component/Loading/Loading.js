import React from 'react';

import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <ReactLoading type={'cylon'} color={'orangered'} height={667} width={375} />
        </div>
    );
};

export default Loading;