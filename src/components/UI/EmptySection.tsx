import * as React from "react";
import './styles.css'
export const EmptySection=():JSX.Element=>{
	return(
		<div className={'empty'}>
			<img src="./public/assets/emptyIcon.png" alt=""/>
			<p className={'emptyF'}>Перетащите сюда</p>
			<p className={'emptyS'}>любой элемент из левой панели</p>
		</div>
	)
}