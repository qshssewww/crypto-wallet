import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import {reducer as userReducer} from './user/user.slice.ts'


const reducers = combineReducers({
	user: userReducer,
})

const logger = createLogger({
	collapsed: true,
})

export const store = configureStore({
  reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch