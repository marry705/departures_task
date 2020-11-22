import React from 'react';
import DataHeader from './DataPanel/DataHeader/DataHeader'; 
import MainDataPanel from './DataPanel/MainDataPanel/MainDataPanel';

import './Panel.css'

const Panel = () => {

    return (
        <>
        <div className='panel-box'>
            <DataHeader/>
            <MainDataPanel/>
        </div>
        </>
    );
};

export default Panel;