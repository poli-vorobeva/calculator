import { viewReducer } from './viewReducer'
import {dragReducer} from "./dragReducer";

export const { addSection,deleteSection,reorderItems } = viewReducer.actions
export const {setDragElement,setOverElement}=dragReducer.actions