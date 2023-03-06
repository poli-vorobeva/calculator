import store from "./store";
import {IDragInitialState} from "./reducer/dragReducer";
import {IViewInitialState} from "./reducer/viewReducer";

export type AppDispatch = typeof store.dispatch;

export type dragStore = {
	dragData: IDragInitialState
}
export interface IViewStore {
	viewData: IViewInitialState
}