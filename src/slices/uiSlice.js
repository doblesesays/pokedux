import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    not_found: false
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setNotFound: (state, action) => {
            state.not_found = action.payload;
        }
    }
});

export const { setLoading, setNotFound } = uiSlice.actions;
export default uiSlice.reducer;