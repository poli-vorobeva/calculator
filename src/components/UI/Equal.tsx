import * as React from "react";
import {useDispatch} from "react-redux";
import {equal} from '../../reducer/actions'
export const Equal=()=>{
	const dispatch=useDispatch()
	return (
		<div className={'itemWrapper singleString equal'} onClick={()=>dispatch(equal())}>=</div>
	)
}