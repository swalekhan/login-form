import { useRef, useState } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [spinar, setSpiner] = useState(false)
  const [isLogin, setIsLogin] = useState(true);
  const passRef = useRef()
  const emailRef = useRef()

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHanler = (e) => {
    e.preventDefault();
    const updatedEmail = emailRef.current.value;
    const updatedPass = passRef.current.value;
    setSpiner(true)

    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCWiniCYxqAVOK5BkdZfgrK35YR2k8VUt8';
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCWiniCYxqAVOK5BkdZfgrK35YR2k8VUt8'
    }


    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ email: updatedEmail, password: updatedPass, returnSecureToken: true }),
      headers: {
        "Content-Type": "Application/json",
      },

    }).then((res) => {
      setSpiner(false)
      if (res.ok) {
        return res.json();

      } else {
        return res.json().then((data) => {
          let errMsg = "error"
          if (data && data.error && data.error.message) {
            errMsg = data.error.message;
          }
           throw new Error(errMsg)  })
      }

    }).then((data)=>{
     console.log(data)
    }).catch((err)=>{
      alert(err.message)
    })

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHanler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passRef} />
        </div>
        <div className={classes.actions}>
          {!spinar && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {spinar && <p style={{ color: "white" }}>sending request..</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
