import * as React from "react";

export const Numbers=()=>{
	const data=[1,2,3,4,5,6,7,8,9,0,',']
	return (
		<div>	{
			data.map(e=><span>{e}</span>)
		}</div>

	)
}