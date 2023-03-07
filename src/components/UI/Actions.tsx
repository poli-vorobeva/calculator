import * as React from "react";

export const Actions=()=>{
	const actions={
		div:'/',
		multi:'*',
		sub:'-',
		add:'+'
	}
	return (
		<div>
			{Object.entries(actions).map(el=>{
				return <button onClick={()=>console.log(el[0])}>{el[1]}</button>
			})}
		</div>

	)
}