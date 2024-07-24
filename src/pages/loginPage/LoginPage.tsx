import { useState, FC } from 'react';
import InputGroup from '../../components/inputGroup/InputGroup.tsx';
import BlueButton from '../../components/buttonBlue/ButtonBlue.tsx';
import styles from './LoginPage.module.css'
import {Link, useNavigate} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { useAppDispatch } from '../../hooks/redux-hooks.ts';
import { actions } from '../../store/user/user.slice.ts';


const Login: FC = () => {

  const [emailValue, setEmailValue] = useState('') 
  const [passValue, setPassValue] = useState('') 

  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const {setUser} = actions

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailValue, passValue)
    .then(({user}) => {
      dispatch(setUser({
        balance: 0,
        email: user.email,
        id: user.uid,
        token: user.refreshToken,
      }))
      navigate('/')
      })
      .catch(console.error);
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>Login</h2>
        <InputGroup
          setValue={setEmailValue}
          value={emailValue}
          id="login-email"
          label="Email"
          type="email"
          autoComplete='email'
        />
        <InputGroup
          setValue={setPassValue}
          value={passValue}
          id="login-password"
          label="Password"
          type="password"
          autoComplete='current-password'
        />
        <BlueButton onClick={handleLogin} type="submit">sign in</BlueButton>
      </form>
      <div className={styles.linkContainer}>
        <p>Don't have an account? <Link to="/register" className={styles.link}>Register here</Link></p>
      </div>
    </div>
  );
}

export default Login;