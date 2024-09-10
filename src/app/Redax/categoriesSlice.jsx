const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


let initialState={product: [], isLoading: false, error: {}}

export let getCategories = createAsyncThunk('categories/getCategories', async () => {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let data = await response.json()
    return data.categories;
})

let categoriesSlice=createSlice({
    name: 'categories',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state, action) => {
            state.isLoading = true
        }),
            builder.addCase(getCategories.fulfilled, (state, action) => {
                state.isLoading = false
                state.product = action.payload
            }),
            builder.addCase(getCategories.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
            })
    },
    reducers: {}
 
})

export let CategoriesSlice=categoriesSlice.reducer