import { FC, useState } from 'react';
import styles from './RegisterPage.module.css'
import InputGroup from '../../components/inputGroup/InputGroup.tsx';
import ButtonBlue from '../../components/buttonBlue/ButtonBlue.tsx';
import { Link, useNavigate } from 'react-router-dom';
import { actions } from '../../store/user/user.slice.ts';
import { useAppDispatch } from '../../hooks/redux-hooks.ts';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const RegisterPage: FC = () => {

	const [emailValue, setEmailValue] = useState('') 
  const [passValue, setPassValue] = useState('') 
	const [confirmPassValue, setConfirmPassValue] = useState('') 

	const navigate = useNavigate();

	const {setUser} = actions

	const dispatch = useAppDispatch()


	const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (passValue !== confirmPassValue) {
			return alert('Passwords do not match')
		}
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, emailValue, passValue)
			.then(({user}) => {
				dispatch(setUser({
					balance: 0,
					email: user.email,
					id: user.uid,
					token: user.refreshToken,
				}))
				navigate('/')
			})
			.catch(console.error)
		// setUser(user) with useActions() -> typeError ??
	}


	return (
		<div className={styles.container}>
      <form className={styles.form}>
				<h2>Register</h2>
				<InputGroup
					value={emailValue} 
					setValue={setEmailValue} 
					id="register-email"
					label="Email" 
					type="email" 
					autoComplete='email'
				/>
				<InputGroup
					value={passValue} 
					setValue={setPassValue}
					id="register-password"
					label="Password"
					type="password" 
					autoComplete='new-password'
				/>
				<InputGroup
					value={confirmPassValue}
					setValue={setConfirmPassValue}
					id="register-confirm-password"
					label="Confirm Password"
					type="password"
					autoComplete='new-password'
				/>
				<ButtonBlue onClick={() => handleRegister} type="submit">Register</ButtonBlue>
			</form>
			<div className={styles.linkContainer}>
          <p>Already have an account? <Link to="/login" className={styles.link}>Login here</Link></p>
        </div>
    </div>
	);
};

export default RegisterPage;