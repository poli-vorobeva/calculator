import * as React from "react";
import './styles.css'
import {ActionButton} from "./ActionButton";

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
				{Object.entries(actions).map(el=> <ActionButton key={el[0]} action={el[0]} icon={el[1]}/>)}
			</div>
		</div>
	)
}