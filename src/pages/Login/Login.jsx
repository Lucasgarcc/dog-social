import React from 'react'
import styles from './Login.module.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm.jsx';
import LoginCreate from './LoginCreate/LoginCreate.jsx';
import LoginPasswordLost from './LoginPasswordLost/LoginPasswordLost.jsx';
import LoginPasswordReset from './LoginPasswordReset/LoginPasswordReset.jsx';

const Login = () => {
  return (
    <div className={styles.login}>
      <Routes>
        <Route 
          path="/" 
          element={<LoginForm />}
        />
        <Route 
          path="/login/create" 
          element={<LoginCreate />} 
        />
        <Route
          path="/password-lost"
          element={<LoginPasswordLost />}
        />
        <Route
          path="/reset"
          element={<LoginPasswordReset />}
        />
      </Routes>
    </div>
  )
}

export default Login
