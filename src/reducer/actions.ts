import { viewReducer } from './viewReducer'
import {dragReducer} from "./dragReducer";

export const { addSection,deleteSection,reorderItems,changeMode} = viewReducer.actions
export const {setDragElement,setOverElement}=dragReducer.actions