
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



let initialState = { product: [], isLoading: false, error: {} }


export let getDitilsIngredint = createAsyncThunk('detailsCatogry/getDitilsIngredint', async (id) => {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`)
    let data = await response.json()
    return data.meals;
})



let getDitilIngredint = createSlice({
    name: 'detailsCatogry',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getDitilsIngredint.pending, (state, action) => {
            state.isLoading = true
        }),
            builder.addCase(getDitilsIngredint.fulfilled, (state, action) => {
                state.isLoading = false
                state.product = action.payload
            }),
            builder.addCase(getDitilsIngredint.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
            })
    }, reducers: {},

})

export let getDitilIngredints = getDitilIngredint.reducer;