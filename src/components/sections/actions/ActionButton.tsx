import {addAction} from "../../../reducer/actions";
import * as React from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../common/dto";

type tPropsActionButton = { action: string, icon: string }
export const ActionButton = (props: tPropsActionButton): JSX.Element => {
	const dispatch = useDispatch<AppDispatch>()
	return (
		<button
			className={'actionsItem'}
			onClick={() => dispatch(addAction(props.action))}>{props.icon}
		</button>
	)
}