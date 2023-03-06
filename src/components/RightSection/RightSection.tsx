import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {IViewInitialState} from '../../reducer/viewReducer'
import {AppDispatch} from "../../dto";
import {addSection,deleteSection} from '../../reducer/viewActions'
interface IViewStore {
	viewData: IViewInitialState
}

export const RightSection = () => {

	const sectionsData = useSelector((state: IViewStore) => state.viewData.constructorData)
	const dispatch = useDispatch<AppDispatch>()
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
				sectionsData.map((sec: string) => <div onDoubleClick={()=>dispatch(deleteSection(sec))}>{sec}</div>)
			}
		</div>
	)
}