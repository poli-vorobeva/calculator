import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, IViewStore} from "../../dto";
import {changeMode} from '../../reducer/actions'

export const ModeRadio=(props:{mode:'constructor' | 'runtime'})=>{
	const checked=useSelector((state:IViewStore) => state.viewData.mode)
	const dispatch=useDispatch<AppDispatch>()

	return(
		<div>
			<input type="radio" id="mode" name="mode" value={props.mode}
						 onChange={(e)=>dispatch(changeMode(props.mode))}
						 checked={checked===props.mode}/>
			<label htmlFor="huey">{props.mode}</label>
		</div>
	)
}