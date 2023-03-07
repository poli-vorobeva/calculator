import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {calculate} from "../components/functions";

const initialState: IDataInitialState = {
	result: '0',
	currentAction: '',
	firstNumber: '',
	secondNumber: '',
	currentNumber: '0'
};

export interface IDataInitialState {
	result: string,
	currentAction: string,
	currentNumber: string,
	firstNumber: string,
	secondNumber: string
}

export const dataReducer = createSlice({
	name: "dataCalculator",
	initialState,
	reducers: {
		addNumber(state: IDataInitialState, action: PayloadAction<string>) {
			state.currentNumber = state.currentNumber !== '0' ? state.currentNumber + action.payload : action.payload
		},
		addAction(state: IDataInitialState, action: PayloadAction<string>) {
			if (!state.firstNumber) {
				state.firstNumber = state.currentNumber
				state.currentAction = action.payload
				state.currentNumber = ''
			} else {
				state.firstNumber = calculate(state.currentAction, state.firstNumber, state.currentNumber)
				state.currentAction = action.payload
				state.currentNumber = ''
			}
		},
		equal(state: IDataInitialState) {
			state.currentNumber=calculate(state.currentAction, state.firstNumber, state.currentNumber)
		}
	},
});

export default dataReducer.reducer;