import * as React from "react";
import './styles.css'
import {DataString} from "../UI/DataString";
import {Actions} from "../UI/actions/Actions";
import {Numbers} from "../UI/numbers/Numbers";
import {Equal} from "../UI/Equal";
import {DragWrapper} from "../UI/DragWrapper";
import {useSelector} from "react-redux";
import {IViewStore} from "../../dto";

export const ConstructorSection = (props: { mode: string }) => {
	const addedData = useSelector((state: IViewStore) => state.viewData.constructorData)
	const content = {
		dataString: <DataString/>,
		actions: <Actions/>,
		numbers: <Numbers/>,
		equal: <Equal/>
	}
	return (
		<div className="section left">
			{
				props.mode !== 'runtime' &&
				Object.entries(content).map(el => {
					return <DragWrapper key={el[0]} blocked={addedData.includes(el[0])} screen={'constructor'}
															value={el[0]}>{el[1]}</DragWrapper>
				})}
		</div>
	)
}