import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState:IViewInitialState = {
	mode: 'constructor',
	constructorData:[]
}
export interface IViewInitialState {
	mode: 'constructor' | 'runtime',
	constructorData:string[],
}
export const viewReducer = createSlice({
	name: 'viewData',
	initialState,
	reducers: {
		changeMode:(state:IViewInitialState,action:PayloadAction<'constructor' | 'runtime'>)=>{
			state.mode=action.payload
		},
		addSection:(state:IViewInitialState,action:PayloadAction<string>)=>{
			!state.constructorData.includes(action.payload) && state.constructorData.push(action.payload)
		},
		deleteSection:(state:IViewInitialState,action:PayloadAction<string>)=>{
			state.constructorData=state.constructorData.filter(el=>el!==action.payload)
		},
		reorderItems:(state:IViewInitialState,action:PayloadAction<{ drag: string, over: string }>)=>{
			const dragIndex = state.constructorData.indexOf(action.payload.drag)
			const overIndex = state.constructorData.indexOf(action.payload.over);
			if(dragIndex<0){
				state.constructorData.splice(overIndex,1,action.payload.drag,action.payload.over)
			}else{
				[state.constructorData[dragIndex],state.constructorData[overIndex]]=[state.constructorData[overIndex],state.constructorData[dragIndex]]

			}
			}
	}
})

export default viewReducer.reducer