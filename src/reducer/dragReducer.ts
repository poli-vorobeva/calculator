import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IDragInitialState = {
	dragElement: '',
	overElement: ''
}

export interface IDragInitialState {
	dragElement: string,
	overElement: string
}

export const dragReducer = createSlice({
	name: 'dragData',
	initialState,
	reducers: {
		setDragElement(state, action: PayloadAction<string>) {
			state.dragElement=action.payload
		},
		setOverElement(state, action: PayloadAction<string>) {
			state.overElement=action.payload
		}
	}
})

export default dragReducer.reducer