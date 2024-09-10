
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


let initialState = { details: [], isLoading: false, error: {} }


export let getIngredientsSlice = createAsyncThunk('IngredientsSlice/getIngredientsSlice', async () => {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let data = await response.json()
    return data.meals;
})


let IngredientsSlice = createSlice({
    name: "IngredientsSlice",
    initialState,
    extraReducers: ((builder) => {
        builder.addCase(getIngredientsSlice.pending, (state, action) => {
            state.isLoading = true
        }),
            builder.addCase(getIngredientsSlice.fulfilled, (state, action) => {
                state.isLoading = false
                state.product = action.payload
            }),
            builder.addCase(getIngredientsSlice.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
            })
    }),
    reducers: {},

})

export let getIngredients = IngredientsSlice.reducer;