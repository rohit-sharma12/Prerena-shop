import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`
const USER_TOKEN = `Bearer ${localStorage.getItem("userToken")}`;

export const fetchAdminProducts = createAsyncThunk(
    "adminProducts/fetchProducts",
    async () => {
        const response = await axios.get(`${API_URL}/api/admin/products`, {
            headers: {
                Authorization: USER_TOKEN,
            },
        });
        return response.data;
    }
);

export const createProduct = createAsyncThunk("adminProducts/createProduct", async (productData) => {
    const response = await axios.post(
        `${API_URL}/api/admin/products`,
        productData,
        {
            headers: {
                Authorization: USER_TOKEN,
            }
        }
    )
    return response.data;
});

export const updateProduct = createAsyncThunk("adminProducts/updateProduct", async ({ id, productData }) => {
    const response = await axios.put(`${API_URL}/admin/products/${id}`, productData,
        {
            headers: {
                Authorization: USER_TOKEN,
            }
        }
    )
    return response.data;
})

export const deleteProduct = createAsyncThunk("adminProducts/deleteProduct", async ({ id }) => {
    await axios.delete(`${API_URL}/admin/products/${id}`,
        {
            headers: {
                Authorization: USER_TOKEN,
            }
        }
    )
    return id;
})

