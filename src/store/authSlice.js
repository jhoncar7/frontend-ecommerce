import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        _id: null,
        name: null,
        lastName: null,
        email: null,
        rol: null,
        cart_id: null,
        status: 'checking', // checking - authenticated, not-authenticated
        isAdmin: false,
    },
    reducers: {
        onLogin: (state, { payload }) => {
            state.status = 'authenticated';
            state._id = payload._id;
            state.name = payload.name;
            state.lastName = payload.lastName;
            state.email = payload.email;
            state.rol = payload.rol;
            state.cart_id = payload.cart_id;
            state.isAdmin = payload.rol === 'admin' ? true : false;
        },
        onLogout: (state) => {
            state.status = 'not-authenticated';
            state._id = null;
            state.name = null;
            state.lastName = null;
            state.email = null;
            state.rol = null;
            state.cart_id = null;
            state.isAdmin = false;
        },
        onCheckingLogin: (state) => {
            state.status = 'checking';
            state._id = null;
            state.name = null;
            state.lastName = null;
            state.email = null;
            state.rol = null;
            state.cart_id = null;
            state.isAdmin = false;
        },
    },
});

export const { onLogin, onLogout, onCheckingLogin } = authSlice.actions;