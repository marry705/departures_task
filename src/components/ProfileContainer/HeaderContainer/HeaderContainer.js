import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/actions';

import './HeaderContainer.css';

const HeaderContainer = () => {
    const dispatch = useDispatch();

    return (
        <div className='main-header'>
            <button onClick={() => dispatch(logOut())}>
                Выйти
            </button>
        </div>
    );
}
    

export default HeaderContainer;