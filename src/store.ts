import {configureStore} from "@reduxjs/toolkit";
import dataCalculator from './reducer/dataReducer'
import viewData from './reducer/viewReducer'
import dragData from './reducer/dragReducer'

const store = configureStore({
	reducer: {dataCalculator, viewData, dragData}
});
export default store;