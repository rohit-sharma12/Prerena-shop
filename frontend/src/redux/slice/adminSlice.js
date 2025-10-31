import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

//fetch all users (admin only)
export const fetchUsers = createAsyncThunk("admin/fetchUsers", async () => {
    const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,
        {
            headers: { Authorization: `Bearer ${localStorage.getItem("userTOken")}` },
        }
    );
    return response.data;
})

//Add the create user action
export const addUser = createAsyncThunk("admin/addUser", async (userData, { rejectWithVaalue }) => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,
            userData,
            {
                headers: { Authorization: `Bearer ${localStorage.getItem("userTOken")}` },
            }
        );
        return response.data;
    } catch (error) {
        return rejectWithVaalue(error.response.data);
    }
});

//Delete the user
export const deleteUser = createAsyncThunk("admin/deleteUser", async (id) => {
    await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
        }
    );
    return id;
});

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter((user) => user.id !== action.payload);
            })
            .addCase(addUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = (action.payload.user);
            })
            .addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});

export default adminSlice.reducer;
