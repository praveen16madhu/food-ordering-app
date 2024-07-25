import { createSlice } from "@reduxjs/toolkit"


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        userStatus:"Logout"
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
            console.log(action.payload);
            console.log("item added");

        },
        removeItem:(state,action)=>{
          state.items.pop();
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        },
        toggleState:(state,action)=>{
           if(state.userStatus==="Login")
            state.userStatus='Logout';
           else
           state.userStatus='Login'
        }
    }
})
console.log(createSlice);

export const {addItem,removeItem,clearCart,toggleState}=cartSlice.actions;

export default cartSlice.reducer;