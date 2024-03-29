import { createSlice } from "@reduxjs/toolkit"




const wishlistSlice = createSlice({
   name:'wishlist',
//    to store more than one value
  initialState:[],
   reducers:{
    // actions
    //   function to add the items to the state
    addToWishlist :(state,action)=>{
        state.push(action.payload)
    },
    removeFromWishlist :(state,action)=>{
        // filter - returns a new array to statisfying
        return state.filter(item=>item.id!=action.payload)
    }
   }
})

export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer