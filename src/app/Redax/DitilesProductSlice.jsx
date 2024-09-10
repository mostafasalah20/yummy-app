const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


let initialState={ details: [], isLoading: false, error: {} }


export let getDetails = createAsyncThunk('detailsProduct/getDetails', async (id) => {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let data = await response.json()
    return data.meals;
})

let detailsProduct=createSlice({
    name: 'detailsProduct',
    initialState,
    extraReducers:((builder)=>{
        builder.addCase(getDetails.pending, (state, action) => {
            state.isLoading = true
        }),
            builder.addCase(getDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.product = action.payload
            }),
            builder.addCase(getDetails.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
            })
    }),
    reducers: {},
})

export let details=detailsProduct.reducer;