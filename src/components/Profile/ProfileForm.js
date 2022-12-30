import { useContext, useRef } from 'react';
import Context from '../../store/Context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const abc = useContext(Context);
  const passRef = useRef()

  const passChangeHanler = (e) => {
    e.preventDefault();
    let updatedPass = passRef.current.value

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCWiniCYxqAVOK5BkdZfgrK35YR2k8VUt8", {
      method: "POST",
      body: JSON.stringify({ idToken: abc.token, password: updatedPass, returnSecureToken: true }),
      headers: {
        "Content-Type": "Application/json",
      },
    }).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <form className={classes.form} onSubmit={passChangeHanler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passRef} />
      </div>
      <div className={classes.action}>
        <button >Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
