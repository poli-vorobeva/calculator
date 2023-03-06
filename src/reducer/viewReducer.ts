import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState:IViewInitialState = {
	mode: 'constructor',
	constructorData:[]
}
export interface IViewInitialState {
	mode: 'constructor' | 'runtime',
	constructorData:string[]
}
export const viewReducer = createSlice({
	name: 'viewData',
	initialState,
	reducers: {
		addSection:(state:IViewInitialState,action:PayloadAction<string>)=>{
			state.constructorData.push(action.payload)
			console.log(state.constructorData)
		},
		deleteSection:(state:IViewInitialState,action:PayloadAction<string>)=>{
			state.constructorData=state.constructorData.filter(el=>el!==action.payload)
		}
	}
})

export default viewReducer.reducer