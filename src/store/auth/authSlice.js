import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = 'in'
            state.uid = action.payload.uid
            state.email = action.payload.email
            state.displayName = action.payload.displayName
            state.photoURL = action.payload.photoURL
        },
        logout: (state, payload) => {
            state.status = 'out'
            state.uid = null
            state.email = null
            state.displayName = null
            state.photoURL = null
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        }
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions

