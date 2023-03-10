import * as React from "react";
import './styles.css'
import {useSelector} from "react-redux";
import { Display } from "../../sections/Display";
import {Actions} from "../../sections/actions/Actions";
import {Numbers} from "../../sections/numbers/Numbers";
import {Equal} from "../../sections/Equal";
import {DragWrapper} from "../../hoc/drag/DragWrapper";
import {IViewStore} from "../../common/dto";

export const ConstructorSection = (props: { mode: string }):JSX.Element => {
	const addedData = useSelector((state: IViewStore) => state.viewData.constructorData)
	const content = {
		dataString: <Display/>,
		actions: <Actions/>,
		numbers: <Numbers/>,
		equal: <Equal/>
	}
	return (
		<div className="section left">
			{
				props.mode !== 'runtime' &&
				Object.entries(content).map(el => {
					return <DragWrapper
						key={el[0]}
						blocked={addedData.includes(el[0])}
						screen={'constructor'}
						value={el[0]}
					>{el[1]}
					</DragWrapper>
				})}
		</div>
	)
}