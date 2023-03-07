import * as React from "react";
import './styles.css'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../dto";
import {addAction} from '../../reducer/actions'

export const Actions=()=>{
	const dispatch=useDispatch<AppDispatch>()
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
					return <button
						className={'actionsItem'}
						onClick={()=>dispatch(addAction(el[0]))}>{el[1]}</button>
				})}
			</div>
		</div>
	)
}