import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviewList : []
}

export const reviewSlice = createSlice({
    name : "review",
    initialState,
    reducers : {
        setDataReview: (state,action)=>{
            console.log(action)
            state.reviewList = [...action.payload]
        }
    }
})

export const {setDataReview} = reviewSlice.actions

export default reviewSlice.reducer