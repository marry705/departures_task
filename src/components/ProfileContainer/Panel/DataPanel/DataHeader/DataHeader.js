import React from 'react';
import DateInput from './DateInput';

const DataHeader = () => {
    return (
        <div className='panel-header'>
            <h2><b>Вылеты</b> SVO - JFK</h2>
            <DateInput/>
        </div>
    );
};

export default DataHeader;