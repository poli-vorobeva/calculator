import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {calculate} from "../components/common/functions";

const initialState: IDataInitialState = {
	result: '0',
	currentAction: '',
	firstNumber: '',
	secondNumber: '',
	currentNumber: '0',
	isEqual:false
};

export interface IDataInitialState {
	result: string,
	currentAction: string,
	currentNumber: string,
	firstNumber: string,
	secondNumber: string,
	isEqual:boolean
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
			} else if(state.isEqual){
				state.firstNumber=state.currentNumber
				state.currentAction = action.payload
				state.currentNumber = ''
			}else {
				state.firstNumber = calculate(state.currentAction, state.firstNumber, state.currentNumber)
				state.currentAction = action.payload
				state.currentNumber = ''
			}
		},
		equal(state: IDataInitialState) {
			state.isEqual=true
			state.currentNumber=calculate(state.currentAction, state.firstNumber, state.currentNumber)
		},
		reset(state: IDataInitialState){
			state.currentNumber='0'
			state.firstNumber=''
			state.currentAction=''
		}
	},
});

export default dataReducer.reducer;