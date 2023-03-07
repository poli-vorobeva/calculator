import * as React from "react";
import './styles.css'
import {useSelector} from "react-redux";
import {ICalcStore} from "../../dto";

export const DataString:React.FC=()=>{
	const c =useSelector((state:ICalcStore) =>  state.dataCalculator.currentNumber)
	return (
		<div className={'itemWrapper singleString dataStringEmpty'}>
			<div className={'dataStringContent'} style={{fontSize:`${c.length>8&&"15px"}`}}>{c}</div>
		</div>
	)
}