
import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";


const initialState = localStorage.getItem("card") ? JSON.parse(localStorage.getItem("card")) : { cardItem: [] };

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        adToCard: (state, action) => {
            const item = action.payload
            // console.log(item);

            const exitItem = state.cardItem.find((a) => a._id === item._id);

            if ( exitItem){
                state.cardItem === state.cardItem.map((a) => {
                    a._id === exitItem._id ? item :a ;
            })
            }else{
                state.cardItem = [...state.cardItem ,item]
            }


            // Calculate item price

            state.itemPrice = state.cardItem.reduce(
                (acc,item) => acc + item.price * item.qty , 0 );

            // Shipping Price

            state.shippingPrice = state.itemPrice > 100 ? 0 : 20 ;

            // GST Price

            state.taxPrice = Number(0.18 * state.itemPrice);

            // Total Price

            state.TotalPrice = 

            Number(state.itemPrice) + 

            Number(state.shippingPrice) + 

            Number(state.taxPrice) ;


 



             localStorage.setItem("card" , JSON.stringify(state));

        }
    }
})

export const { adToCard } = cardSlice.actions;

export default cardSlice.reducer;