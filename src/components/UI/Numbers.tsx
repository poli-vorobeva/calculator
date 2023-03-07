import * as React from "react";
import './styles.css'

export const Numbers=()=>{
	const data=[1,2,3,4,5,6,7,8,9,0,',']
	return (
		<div className={'itemWrapper'}>
			<div className={'numbers'}>	{
				data.map(e=><div className={`item ${e===0 && 'zeroStyle'} numbersItem`}>{e}</div>)
			}</div>
		</div>


	)
}