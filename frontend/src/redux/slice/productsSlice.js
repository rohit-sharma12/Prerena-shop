import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchProductsByFilters = createAsyncThunk("products/fetchByFilters",
    async ({
        collection,
        size,
        color,
        minPrice,
        maxPrice,
        sortBy,
        search,
        category,
        material,
        brand,
        limit,
    }) => {
        const query = new URLSearchParams();
        if (collection) query.append("collection", collection);
        if (size) query.append("size", size);
        if (color) query.append("color", color);
        if (minPrice) query.append("minPrice", minPrice);
        if (maxPrice) query.append("maxPrice", maxPrice);
        if (sortBy) query.append("sortBy", sortBy);
        if (search) query.append("search", search);
        if (category) query.append("category", category);
        if (material) query.append("material", material);
        if (brand) query.append("brand", brand);
        if (limit) query.append("limit", limit);

        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${query.toString()}`)
        return response.data;

    }
);

export const fetchProductDetails = createAsyncThunk("products/fetchProductDetails", async (id) => {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`);
    return response.data;
});

export const updateProduct = createAsyncThunk("products/updateProduct", (async ({ id, productData }) => {
    const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`, productData,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            }
        }
    )
    return response.data;
}));

export const fetchSimilarProducts = createAsyncThunk("products/fetchSimilarProducts", async ({ id }) => {
    const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/products/aimilar/${id}`
    );
    return response.data;
})

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        selectedProduct: null,
        similarProducts: [],
        loading: false,
        error: false,
        filters: {
            category: "",
            size: "",
            color: "",
            brand: "",
            minPrice: "",
            maxPrice: "",
            sortBy: "",
            search: "",
            material: "",
            collection: "",
        },
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        clearFilters: (state) => {
            state.filters = {
                category: "",
                size: "",
                color: "",
                brand: "",
                minPrice: "",
                maxPrice: "",
                sortBy: "",
                search: "",
                material: "",
                collection: "",
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByFilters.pending, (state) => {
                state.loading = true
                state.error = null;
            })
            .addCase(fetchProductsByFilters.fulfilled, (state, action) => {
                state.loading = false
                state.products = Array.isArray(action.payload) ? action.payload : []
            })
            .addCase(fetchProductsByFilters.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message;
            })
            //handling fetching single products details
            .addCase(fetchProductDetails.pending, (state) => {
                state.loading = true
                state.error = null;
            })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload;
            })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message;
            })

            //Update product
            .addCase(updateProduct.pending, (state) => {
                state.loading = true
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.loading = false
                const updatedProduct = action.payload;
                const index = state.products.findIndex((product) => product.id === updateProduct.id);
                if (index !== -1) {
                    state.products[index] = updatedProduct;
                }
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message;
            })

            //

            .addCase(fetchSimilarProducts.pending, (state) => {
                state.loading = true
                state.error = null;
            })
            .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload;
            })
            .addCase(fetchSimilarProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message;
            })
    }
})

export const { setFilters, clearFilters } = productsSlice.actions;
export default productsSlice.reducer;