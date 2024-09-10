

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



let initialState = { product: [], isLoading: false, error: {} }


export let getAreaDetailsSlice = createAsyncThunk('getAreaSlice/getAreaDetailsSlice', async (area) => {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    let data = await response.json()
    return data.meals;
})



let getAreaSlice = createSlice({
    name: 'getAreaSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAreaDetailsSlice.pending, (state, action) => {
            state.isLoading = true
        }),
            builder.addCase(getAreaDetailsSlice.fulfilled, (state, action) => {
                state.isLoading = false
                state.product = action.payload
            }),
            builder.addCase(getAreaDetailsSlice.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
            })
    }, reducers: {},

})

export let AreaDetailsSlice = getAreaSlice.reducer;