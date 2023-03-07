import * as React from "react";
import './styles.css'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, IViewStore} from "../../dto";
import {addNumber} from '../../reducer/actions'
import {useState} from "react";
export const Numbers = () => {
	const data = ['1', '2', '3', '4', '5', '6','7', '8', '9', '0', ',']
	const mode = useSelector((state: IViewStore) => state.viewData.mode)
	const dispatch = useDispatch<AppDispatch>()
	return (
		<div className={'itemWrapper'}>
			<div className={'numbers'}>  {
				data.map(e => <div
					className={`item ${e === '0' && 'zeroStyle'} numbersItem`}
					onClick={(ev) => {
						if (mode !== 'runtime') return
						console.log(e)
						dispatch(addNumber(e))
					}}
				>{e}</div>)
			}</div>
		</div>

	)
}