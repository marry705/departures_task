import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../utils/utils';
import { requestLogIn, updateEmail, updatePassword } from '../../redux/actions';
import { Display, WhenError, WhenLoading, WhenNoAction } from '../Display/Display';

import './LoginForm.css';

const LoginForm = () => {
  const { isLoggedIn, password, email, isLoading, errorMessage } = useSelector(state => state.authentication);
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState(email);
  const [userPassword, setUserPassword] = useState(password);
  const emailError = useRef(null);
  const passwordError = useRef(null);

  if (isLoggedIn) { return <Redirect to={ROUTES.PROFILE} /> }

  let isError = errorMessage ? true : false;
  let isEmailValid = /.+@.+\.[A-Za-z]+$/.test(userEmail);
  let isPasswordValid = /[A-Za-z0-9]/.test(userPassword) && userPassword.length > 7;

  const setEmail = (value) => {
    setUserEmail(value);
    dispatch(updateEmail(value));
  }

  const setPassword = (value) => {
    setUserPassword(value);
    dispatch(updatePassword(value));
  }

  const onBlueEmailInput = (currentTarget) => {
    if (!isEmailValid) {
      currentTarget.classList.add('is-invalid');
      emailError.current.classList.remove('hidden');
    } else {
      currentTarget.classList.remove('is-invalid');
      emailError.current.classList.add('hidden');
    }
  }

  const onBluePasswordInput = (currentTarget) => {
    if (!isPasswordValid) {
      currentTarget.classList.add('is-invalid');
      passwordError.current.classList.remove('hidden');
    } else {
      currentTarget.classList.remove('is-invalid');
      passwordError.current.classList.add('hidden');
    }
  }

  const onFocusEmailInput = (currentTarget) => {
    currentTarget.classList.remove('is-invalid')
    emailError.current.classList.add('hidden');
  }

  const onFocusPasswordInput = (currentTarget) => {
    currentTarget.classList.remove('is-invalid')
    passwordError.current.classList.add('hidden');
  }

  const submitLogin = (e) =>{
    e.preventDefault();
    dispatch(requestLogIn());
  }
  
  return (
    <>
      <Display ifLoading={isLoading} ifError={isError}>               
        <WhenLoading>   
          <div className='main-wrapper wrapper'>
            <div className='blur-wrapper'></div>
            <div className='cssload-speeding-wheel'></div>
          </div>        
        </WhenLoading>  
        <WhenError> 
          <div className='main-wrapper wrapper'>
            <div className='blur-wrapper'></div>
            <div className='error-block'>
              <p>{errorMessage}</p>
            </div> 
          </div>            
        </WhenError>  
        <WhenNoAction>
          <div className='main-wrapper wrapper'>
            <div className='blur-wrapper'></div>
            <form className='login-form' onSubmit={(e) => submitLogin(e)}>
              <h2>Simple Flight Check</h2>
              <label onBlur={(e) => onBlueEmailInput(e.currentTarget)} 
                     onFocus={(e) => onFocusEmailInput(e.currentTarget)}>
                Логин:
                <input
                    type='email'
                    value={userEmail}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => (e.key === 'Enter' ? setEmail(e.target.value) : null)}
                />
                <p className='hidden' ref={emailError}>Вы ввели не валидный email</p>
              </label>
              <label onBlur={(e) => onBluePasswordInput(e.currentTarget)}
                     onFocus={(e) => onFocusPasswordInput(e.currentTarget)}>
                Пароль:
                <input
                    type='password'
                    value={userPassword}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={(e) => (e.key === 'Enter' ? setPassword(e.target.value) : null)}
                />
                <p className='hidden' ref={passwordError}>Вы ввели не валидный пароль</p>
              </label>
              <button
                  variant='outlined' 
                  color='secondary' 
                  disabled={!(isEmailValid && isPasswordValid)}>
                  Войти
              </button>
            </form>
          </div>
        </WhenNoAction>
      </Display>
    </>
  );
};

export default LoginForm;