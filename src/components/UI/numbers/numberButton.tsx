import {addNumber} from "../../../reducer/actions";
import * as React from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../dto";
import './styles.css'

export const NumberButton = (props: { isDisplay: boolean, mode: string, number: string }) => {
	const dispatch = useDispatch<AppDispatch>()
	return (
		<div
			className={`item ${props.number === '0' && 'zeroStyle'} numbersItem`}
			onClick={(ev) => {
				if (props.mode === 'runtime' && props.isDisplay) dispatch(addNumber(props.number))
			}}
		>{props.number}</div>
	)
}