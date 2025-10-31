import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

//Retreve user info and token from localStorage if available
const userFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

//Check for an existing guest ID in the localStorage or generate new One
const initialGuestId = localStorage.getItem("guestId") || `guest_${new Date()}`;
localStorage.setItem("guestId", initialGuestId);

//Initial State
const initialState = {
    user: userFromStorage,
    guestId: initialGuestId,
    loading: false,
    error: null,
};

//Async Thunk for User logic
export const loginUser = createAsyncThunk("auth/loginUser", async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
            userData
        )
        localStorage.setItem("userInfo", JSON.stringify(response.data.user));
        localStorage.setItem("userToken", response.data.token);

        return response.data.user;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


//Async Thunk for User Singup
export const signupUser = createAsyncThunk("auth/signup", async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/users/signup`,
            userData
        )
        localStorage.setItem("userInfo", JSON.stringify(response.data.user));
        localStorage.setItem("userToken", response.data.token);

        return response.data.user;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.guestId = `guest_${new Date().getTime()}`;
            localStorage.removeItem("userInfo");
            localStorage.removeItem("userToken");
            localStorage.setItem("guestId", state.guestId);
        },
        generateNewGuestId: (state) => {
            state.guestId = `guest_${new Date().getTime()}`;
            localStorage.setItem("guestId", state.guestId);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
    },
});

export const { logout, generateNewGuestId, } = authSlice.actions;
export default authSlice.reducer