import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, IViewStore} from "../../dto";
import {changeMode,reset} from '../../reducer/actions'

export const ModeRadio=(props:{mode:'constructor' | 'runtime'})=>{
	const checked=useSelector((state:IViewStore) => state.viewData.mode)
	const dispatch=useDispatch<AppDispatch>()

	return(
		<div className={`${checked===props.mode?'activeTab':'inActiveTab'}`}>
			<label htmlFor="huey"><img src={`./public/assets/${props.mode}.png`} alt=""/>{props.mode}</label>
			<input type="radio" id="mode" name="mode" value={props.mode}
						 onChange={(e)=> {
							 dispatch(changeMode(props.mode))
							 dispatch(reset())
						 }}
						 checked={checked===props.mode}/>

		</div>
	)
}