const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



let initialState = { product: [], isLoading: false, error: {} }


export let getDitilsCategories = createAsyncThunk('detailsCatogry/getDitilsCategories', async (id) => {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
    let data = await response.json()
    return data.meals;
})



let getDitilsCatogry = createSlice({
    name: 'detailsCatogry',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getDitilsCategories.pending, (state, action) => {
            state.isLoading = true
        }),
            builder.addCase(getDitilsCategories.fulfilled, (state, action) => {
                state.isLoading = false
                state.product = action.payload
            }),
            builder.addCase(getDitilsCategories.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
            })
    }, reducers: {},

})

export let detailsCatogryReducer = getDitilsCatogry.reducer;