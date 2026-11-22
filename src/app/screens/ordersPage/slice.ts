import { createSlice } from "@reduxjs/toolkit";
import { OrderPageState } from "../../../lib/types/screen";

const initialState: OrderPageState = {
  pausedOrder: [],
  processOrder: [],
  fineshedOrder: [],
};
const orderPageSlice = createSlice({
  name: "orderPage",
  initialState,
  reducers: {
    setPausedOrder: (state, action) => {
      state.pausedOrder = action.payload;
    },
    setProcessOrder: (state, action) => {
      state.processOrder = action.payload;
    },
    setFineshedOrder: (state, action) => {
      state.fineshedOrder = action.payload;
    },
  },
});

export const { setPausedOrder, setProcessOrder, setFineshedOrder } =
  orderPageSlice.actions;

const OrderPageReducer = orderPageSlice.reducer;
export default OrderPageReducer;
