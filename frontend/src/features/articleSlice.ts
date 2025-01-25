import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../services/axiosInstance";

export const fetchArticles = createAsyncThunk(
    "articles/fetchArticles",
    async (filters = {}) => {
        const response = await axiosInstance.get("/articles", { params: filters });
        return response.data;
    }
);

const articleSlice = createSlice({
    name: "articles",
    initialState: {
        articles: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.articles = action.payload;
                state.loading = false;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    },
});

export default articleSlice.reducer;
