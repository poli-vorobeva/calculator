import {configureStore} from "@reduxjs/toolkit";
import dataCalculator from './reducer/dataReducer'
import viewData from './reducer/viewReducer'

const store = configureStore({
	reducer: {dataCalculator,viewData}
});
export default store;