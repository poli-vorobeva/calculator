import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, IViewStore} from "../../dto";
import {addSection,deleteSection} from '../../reducer/actions'
import {DragWrapper} from "../UI/DragWrapper";
import {DataString} from "../UI/DataString";
import {Actions} from "../UI/Actions";
import {Numbers} from "../UI/Numbers";
import {Equal} from "../UI/Equal";

export const RightSection = () => {
	const sectionsData = useSelector((state: IViewStore) => state.viewData.constructorData)
	const dispatch = useDispatch<AppDispatch>()

	const content={
		dataString:<DataString/>,
		actions:<Actions/>,
		numbers:<Numbers/>,
		equal:<Equal/>
	}
	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		const t = e.dataTransfer.getData('el')
		dispatch(addSection(t))
	}
	return (
		<div className="section"
				 onDragOver={(e) => e.preventDefault()}
				 onDrop={(e) => dropHandler(e)}
		>
			{
				!!sectionsData.length
					?
				sectionsData.map((sec: string) => <DragWrapper blocked={false} key={sec+'^^'} screen={'view'} value={sec}>
					{content[sec as keyof typeof content]}
				</DragWrapper>)
					:<div>Empty</div>
			}
		</div>
	)
}