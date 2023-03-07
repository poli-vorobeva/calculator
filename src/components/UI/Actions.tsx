import * as React from "react";
import './styles.css'
export const Actions=()=>{
	const actions={
		div:'/',
		multi:'*',
		sub:'-',
		add:'+'
	}
	return (
		<div className={'itemWrapper singleString' }>
			<div className={'actions'}>
				{Object.entries(actions).map(el=>{
					return <button className={'actionsItem'} onClick={()=>console.log(el[0])}>{el[1]}</button>
				})}
			</div>
		</div>
	)
}