import Ingredients from "../(componens)/Ingredients/page";
import { AreaDetailsSlice } from "./AreaDetailsSlice";
import { getAreaReducer } from "./AreaSlice";
import { CategoriesSlice } from "./categoriesSlice";
import { detailsCatogryReducer } from "./detailsCategry";
import { details } from "./DitilesProductSlice";
import { homeSearch } from "./homeSearchSlice";
import { getDitilIngredints } from "./IngredientDetailSlice";
import { getIngredients } from "./IngredientsSlice";
import { productReducer } from "./productSlice";

const { configureStore } = require("@reduxjs/toolkit");


export let store= configureStore({
    reducer: {
        // Define your reducers here
        products:productReducer,
        details:details,
        CategoriesSlice:CategoriesSlice,
        detailsCatogryReducer:detailsCatogryReducer,
        ingredient:getIngredients,
        getArea:getAreaReducer,
        getDitilIngredints:getDitilIngredints,
        AreaDetailsSlice:AreaDetailsSlice,
        homeSearch:homeSearch
    }
})