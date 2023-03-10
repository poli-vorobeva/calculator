import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, IViewStore, modeType} from "../common/dto";
import {changeMode, reset} from '../../reducer/actions'

export const ModeRadio = (props: { mode: modeType }): JSX.Element => {
	const checked = useSelector((state: IViewStore) => state.viewData.mode)
	const dispatch = useDispatch<AppDispatch>()
	const onChangeHandler = () => {
		dispatch(changeMode(props.mode))
		dispatch(reset())
	}
	const className = `${checked === props.mode ? 'activeTab' : 'inActiveTab'}`
	return (
		<div className={className}>
			<label htmlFor="mode">
				<img src={`./public/assets/${props.mode}.png`} alt=""/>
				{props.mode}
			</label>
			<input type="radio" id="mode" name="mode" value={props.mode}
						 onChange={onChangeHandler}
						 checked={checked === props.mode}/>
		</div>
	)
}