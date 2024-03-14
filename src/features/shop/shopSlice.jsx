import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        value: {
            products: [],
            categories: [],
            categorySelected: '',
            productIdSelected: null,
            productsFilteredByCategory: [],
        }
    },
    reducers: {
        setCategorySelected: (state, action) => {
            const categorySelected = action.payload;
            const productsFiltered = state.value.products.filter((product) => product.category === categorySelected);
            state.value.categorySelected = categorySelected;
            state.value.productsFilteredByCategory = productsFiltered;
        },
        setProductIdSelected: (state, action) => {
            state.value.productIdSelected = action.payload;
        },
        setProducts: (state, action) => {
            state.value.products = action.payload;
        },
        setCategories: (state, action) => {
            state.value.categories = action.payload;
        }
    }
})

export const {
    setCategorySelected,
    setProductIdSelected,
    setProducts,
    setCategories } = shopSlice.actions;

export default shopSlice.reducer;