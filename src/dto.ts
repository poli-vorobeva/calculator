import store from "./store";
import {IDragInitialState} from "./reducer/dragReducer";
import {IViewInitialState} from "./reducer/viewReducer";
import {IDataInitialState} from "./reducer/dataReducer";

export type AppDispatch = typeof store.dispatch;

export type ICalcStore={
	dataCalculator:IDataInitialState
}
export type dragStore = {
	dragData: IDragInitialState
}
export interface IViewStore {
	viewData: IViewInitialState
}