import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	data:''
};

const dataReducer = createSlice({
	name: "dataCalculator",
	initialState,
	reducers: {
		// changeTimer(state, action: PayloadAction<ITimer>) {
		// 	state.timer = action.payload.timer;
		// }
	},
});

const { actions, reducer } = dataReducer;

export const {} = actions;

export default reducer;