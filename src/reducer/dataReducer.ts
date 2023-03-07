import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	result:'',
	currentAction:'',
	currentNumber:''
};

export const dataReducer = createSlice({
	name: "dataCalculator",
	initialState,
	reducers: {

	},
});

export default dataReducer.reducer;