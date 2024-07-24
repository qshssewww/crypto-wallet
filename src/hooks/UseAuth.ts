import {useAppSelector} from './redux-hooks'

export const useAuth = () => {
	const {email, id, token, balance} = useAppSelector(state => state.user)

	return {
		balance,
		isAuth: !!token && !!email,
		id,
		token,
		email
	}
}