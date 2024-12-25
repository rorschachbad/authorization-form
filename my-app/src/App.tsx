import * as React from 'react';
import './App.css';
import { useState } from 'react';
import { USERS } from './components/RegistrationForm/DataBaseUsers/DataBaseUsers';



function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isCorrectPasswordLength = (pass) => {
    if (pass.length < 8) {
      return 'password input-field field-red';
    }
    return 'password input-field field-green';
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onPushToDataBase = () => {
    if (email === '' || password === '' || password.length < 8) return;

    // isCorrectPasswordLength(password);

    USERS.push({
      id: new Date().valueOf(),
      email: email,
      password: password
    })
    setEmail('');
    setPassword('');
  }

  // USERS.forEach(el => {
  //   console.log(el.id);
  // })




  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <div className="navigation">
            <div className="btn-registration">Registration</div>
            <div className="btn-login">Login</div>
          </div>
          <div className="close">
            <button className="btn-close">X</button>
          </div>
        </div>
        <div className="links">
          <div className="apple link">
            <a className="icon" href="#"><i className="fa-brands fa-apple fa-xl apple"></i></a>
          </div>
          <div className="facebook link">
            <a className="icon" href=""><i className="fa-brands fa-facebook-f fa-xl facebook"></i></a>
          </div>
          <div className="google link">
            <a className="icon" href=""><i className="fa-brands fa-google fa-xl google"></i></a>
          </div>
        </div>
        <div className="registration-form">
          <p>or register with e-mail</p>
          <div className="registration-email">
            <input value={email} onChange={onChangeEmail} className="email input-field" placeholder="E-mail" id="email" type="email" />
          </div>
          <div className="registration-password">
            <input value={password} onChange={onChangePassword} className={isCorrectPasswordLength(password)} placeholder="Password" id="pass" type="password" />
            {
              password.length < 8 ? <p className='warrning-pass'>8+ characters</p> : <p className='success-pass'>successfully</p>
            }
          </div>
        </div>
        <div className="create-btn">
          <button onClick={onPushToDataBase} className="create-account">Create account</button>
          <div className="news">
            <input className="checkbox" type="checkbox" />
            <div>Send me news and promotions</div>
          </div>
        </div>
        <div className="privacy-policy">
          <p>By continuing I agree with the <a href="#">Terms & Conditions, Privacy Policy</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
