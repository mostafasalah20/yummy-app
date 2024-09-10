const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export let getProduct = createAsyncThunk('productSlice/getProduct', async () => {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let data = await response.json()
    return data.meals;
})

let initialState = { product: [], isLoading: false, error: {} }

let productSlice = createSlice({
    name: "productSlice",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state, action) => {
            state.isLoading = true
        }),
            builder.addCase(getProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.product = action.payload
            }),
            builder.addCase(getProduct.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
            })
    },
    reducers: {}
})

export let productReducer = productSlice.reducer;