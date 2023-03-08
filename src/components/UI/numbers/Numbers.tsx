import * as React from "react";
import './styles.css'
import {useSelector} from "react-redux";
import {IViewStore} from "../../../dto";
import {NumberButton} from "./numberButton";

export const Numbers = () => {
	const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
	const mode = useSelector((state: IViewStore) => state.viewData.mode)
	const isDisplay = useSelector((state: IViewStore) => state.viewData.constructorData).includes('dataString')

	return (
		<div className={'itemWrapper'}>
			<div className={'numbers'}>  {
				data.map(e => <NumberButton isDisplay={isDisplay} mode={mode} number={e}/>)
			}
			</div>
		</div>

	)
}