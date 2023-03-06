import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {IViewInitialState} from "../../reducer/viewReducer";


export const DragWrapper = (props: { value: string, children: JSX.Element }) => {
	const dispatch=useDispatch()
	const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
		e.dataTransfer.setData('el', props.value)
		console.log("DRGstart")
	}
	return <div draggable={true}
							onDragStart={(e) => dragStart(e)}
	>
		{props.children}
	</div>
}