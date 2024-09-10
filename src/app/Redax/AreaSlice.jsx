const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");




let initialState = { details: [], isLoading: false, error: {} }


export let getAreaSlice = createAsyncThunk('getArea/getAreaSlice', async () => {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let data = await response.json()
    return data.meals;
})





let getArea=createSlice({
    name: "getArea",
    initialState,
    reducers:{},
    extraReducers: ((builder) => {
        builder.addCase(getAreaSlice.pending, (state, action) => {
            state.isLoading = true
        }),
            builder.addCase(getAreaSlice.fulfilled, (state, action) => {
                state.isLoading = false
                state.product = action.payload
            }),
            builder.addCase(getAreaSlice.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
            })
    }),
})

export let getAreaReducer=getArea.reducer;