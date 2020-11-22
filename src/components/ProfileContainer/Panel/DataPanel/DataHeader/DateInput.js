import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDate } from '../../../../../redux/actions';

let thisDate = new Date();
const minDate = `${thisDate.getFullYear()}-${thisDate.getMonth()+1}-${thisDate.getDate()}`;

const DateInput = () => {
    const dispatch = useDispatch();
    const { outboundpartialDate } = useSelector(state => state.departures);

    const onChangeDate = value => {
        dispatch(updateDate(value));
    }

    return (
        <input 
            type='date' 
            className='date-field'
            value={outboundpartialDate || minDate}
            onChange={e => onChangeDate(e.target.value)}
            min={minDate}>
       </input>
    );
};

export default DateInput;