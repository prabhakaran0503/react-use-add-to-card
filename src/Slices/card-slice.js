import {createSlice} from '@reduxjs/toolkit'
import product from "../product.json"

// console.log(product)
const  initialState={
    cardproduct:product
    
}
console.log(product)
console.log(product.cardproduct)
export const counterSlice = createSlice({
    name:"card",
    initialState,
    reducers: {
       addtocard:(state,action)=>{
        console.log(state);
        // state.card.cardproduct.cardproduct.push(action.payload);
       }
  
    }
  
})
 export const{addtocard}=counterSlice.actions
export default counterSlice.reducer