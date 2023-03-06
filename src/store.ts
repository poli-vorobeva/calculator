import {configureStore} from "@reduxjs/toolkit";
import dataCalculator from './reducer/dataReducer'

const store = configureStore({
	reducer: {dataCalculator}
});
export default store;