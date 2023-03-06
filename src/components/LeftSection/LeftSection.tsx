import * as React from "react";
import './styles.css'
import {DataString} from "../UI/DataString";
import {Actions} from "../UI/Actions";
import {Numbers} from "../UI/Numbers";
import {Equal} from "../UI/Equal";
import {DragWrapper} from "../UI/DragWrapper";

export const LeftSection = () => {
	const content={
		dataString:<DataString/>,
		actions:<Actions/>,
		numbers:<Numbers/>,
		equal:<Equal/>
	}
	return (
		<div className="section">
			LEFt
			{Object.entries(content).map(el=>{
				return <DragWrapper screen={'constructor'} value={el[0]}>{el[1]}</DragWrapper>
			})}
		</div>
	)
}