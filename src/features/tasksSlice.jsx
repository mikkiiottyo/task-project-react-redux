import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    task: [],
    loading: false,
    error: null,
    status: 'ALL'
}