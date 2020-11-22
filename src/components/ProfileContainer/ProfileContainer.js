import React from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../utils/utils';
import { useSelector } from 'react-redux';
import Panel from './Panel/Panel';
import HeaderContainer from './HeaderContainer/HeaderContainer';

const ProfileContainer = () => {
  const { isLoggedIn } = useSelector(state => state.authentication);

  if (!isLoggedIn) { return <Redirect to={ROUTES.LOGIN} /> }

  return (
    <>
      <div className='main-wrapper profile-wrapper'>
        <HeaderContainer/>
        <Panel/>
      </div>
    </>
  );
};

export default ProfileContainer;