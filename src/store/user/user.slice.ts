import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {typeUser} from "../../types.ts";


const initialState: typeUser = {
	email: null,
	balance: null,
	token: null,
	id: null
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, {payload: user}: PayloadAction<typeUser>) => {
			state.balance = user.balance;
			state.email = user.email;
			state.token = user.token;
			state.id = user.id;
		},
		addToBalance: (state, { payload: balance }: PayloadAction<number>) => {
      if (state && state.balance != null) {
        state.balance += balance;
      }
    },
		removeUser: (state) => {
			state.balance = null;
			state.email = null;
			state.token = null;
			state.id = null;
		}
	},
})

export const { actions, reducer } = userSlice