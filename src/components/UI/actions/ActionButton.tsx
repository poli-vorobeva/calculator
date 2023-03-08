import {addAction} from "../../../reducer/actions";
import * as React from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../dto";

export const ActionButton = (props: { action: string, icon: string }) => {
	const dispatch = useDispatch<AppDispatch>()
	return (
		<button
			className={'actionsItem'}
			onClick={() => dispatch(addAction(props.action))}>{props.icon}
		</button>
	)
}