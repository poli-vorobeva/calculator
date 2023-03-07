import { viewReducer } from './viewReducer'
import {dragReducer} from "./dragReducer";
import {dataReducer} from "./dataReducer";

export const { addSection,deleteSection,reorderItems,changeMode} = viewReducer.actions
export const {setDragElement,setOverElement}=dragReducer.actions
export const {addAction,addNumber,equal}=dataReducer.actions