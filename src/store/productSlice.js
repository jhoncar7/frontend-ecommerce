import { createSlice } from '@reduxjs/toolkit';

// productos=[
//     {
//         "_id": "657b9a5371e1d82a55e44bf7",
//         "title": "test",
//         "description": "test",
//         "code": "1",
//         "price": 2,
//         "status": true,
//         "stock": 34,
//         "category": "test",
//         "thumbnail": "https://res.cloudinary.com/dcljov9qc/image/upload/v1702599990/m1vo2ebtwudhkjwizzkc.jpg"
//         },
// ]

// pagination: {
// "totalDocs": 4,
// "totalPages": 1,
// "limit": 10,
// "query": "{"status":true}",
// "page": 1,
// "hasNextPage": false,
// "hasPrevPage": false,
// "prevPage": null,
// "nextPage": null,
// },

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: null,
        products: null,
        pagination: null,
    },
    reducers: {
        onProduct: (state, { payload }) => {
            state.product = payload
        },
        onProducts: (state, { payload }) => {
            state.products = payload;
        },
        onPagination: (state, { payload }) => {
            state.pagination = payload;
        },
        onResetProduct: (state) => {
            state.pagination = null;
            state.product = null;
            state.products = null;
        }
    },
});

export const { onProduct, onProducts, onPagination, onResetProduct } = productSlice.actions;