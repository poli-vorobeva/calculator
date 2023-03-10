import * as React from "react";
import './styles.css'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, IViewStore} from "../../common/dto";
import {NumberButton} from "./numberButton";
import {useEffect} from "react";
import {addNumber, addAction,equal} from "../../../reducer/actions";
import {actions} from "../../common/consts";

export const Numbers = () => {
	const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
	const mode = useSelector((state: IViewStore) => state.viewData.mode)
	const isDisplay = useSelector((state: IViewStore) => state.viewData.constructorData).includes('dataString')

	// useEffect(() => {
	// 	console.log('mode',mode)
	// 	//if (mode === 'runtime' && isDisplay) {
	//
	// //	} else {
	// 	//	document.removeEventListener('keypress', keypressHandler)
	// //	}
	// 	//return document.removeEventListener('keypress', keypressHandler)
	// }, [mode, isDisplay])
	return (
		<div className={'itemWrapper'}>
			<div className={'numbers'}>  {
				data.map(e => <NumberButton isDisplay={isDisplay} mode={mode} number={e}/>)
			}
			</div>
		</div>

	)
}