import * as React from "react";
import './styles.css'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, IViewStore} from "../../../dto";
import {NumberButton} from "./numberButton";
import {useEffect} from "react";
import {addNumber, addAction,equal} from "../../../reducer/actions";
import {actions} from "../../consts";

export const Numbers = () => {
	const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
	const acts = ['/', '*', '-', '+']
	const dispatch = useDispatch<AppDispatch>()
	const mode = useSelector((state: IViewStore) => state.viewData.mode)
	const isDisplay = useSelector((state: IViewStore) => state.viewData.constructorData).includes('dataString')
	const keypressHandler = (e: KeyboardEvent) => {
		if (+e.key >= 0 && +e.key <= 9 || e.key === '.') dispatch(addNumber('' + e.key))
		else if (acts.includes(e.key)) {
			const act = Object.entries(actions).find(el=>el[1]===e.key)
			dispatch(addAction(act[0]))
		}
		else if(e.key==='='){
			dispatch(equal())
		}
	}
	useEffect(() => {
		if (mode === 'runtime' && isDisplay) {
			document.addEventListener('keypress', keypressHandler)
		} else {
			document.removeEventListener('keypress', keypressHandler)
		}
	}, [mode, isDisplay])
	return (
		<div className={'itemWrapper'}>
			<div className={'numbers'}>  {
				data.map(e => <NumberButton isDisplay={isDisplay} mode={mode} number={e}/>)
			}
			</div>
		</div>

	)
}