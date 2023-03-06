import * as React from "react";
import './styles.css'
import {DataString} from "../UI/DataString";
import {Actions} from "../UI/Actions";
import {Numbers} from "../UI/Numbers";
import {Equal} from "../UI/Equal";
import {DragWrapper} from "../UI/DragWrapper";
import {useSelector} from "react-redux";
import {IViewInitialState} from "../../reducer/viewReducer";
import {useEffect, useId} from "react";
import {IViewStore} from "../../dto";

export const LeftSection = () => {
	const addedData=useSelector((state:IViewStore )=>state.viewData.constructorData)
	const id = useId()
	const content={
		dataString:<DataString/>,
		actions:<Actions/>,
		numbers:<Numbers/>,
		equal:<Equal/>
	}

	return (
		<div className="section">
			{Object.entries(content).map(el=>{
				return <DragWrapper key={el[0]} blocked={addedData.includes(el[0])} screen={'constructor'} value={el[0]}>{el[1]}</DragWrapper>
			})}
		</div>
	)
}