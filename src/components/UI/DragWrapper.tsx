import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteSection, setDragElement, setOverElement, reorderItems} from "../../reducer/actions";
import {useState} from "react";
import {IDragInitialState} from "../../reducer/dragReducer";

export type dragStore = {
	dragData: IDragInitialState
}
export const DragWrapper = (props: { screen: string, value: string, children: JSX.Element }) => {
	const dispatch = useDispatch()
	const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
		e.dataTransfer.setData('el', props.value)
		dispatch(setDragElement(props.value))
	}
	const dragEl = useSelector((state: dragStore) => state.dragData.dragElement)
	const overEl = useSelector((state: dragStore) => state.dragData.overElement)
	const stylesEl = {background: `${(props.value === overEl && props.screen !== 'constructor') ? 'red' : ''}`}
	//todo add debounce to dragover
	return <div
		draggable={true}
		onDoubleClick={() => props.screen !== 'constructor' && dispatch(deleteSection(props.value))}
		onDragStart={(e) => dragStart(e)}
		onDrop={(e) => {
			if (props.screen === 'constructor') return
			dispatch(reorderItems({drag: dragEl, over: overEl}))
			dispatch(setDragElement(''))
			dispatch(setOverElement(''))
		}}
		onDragOver={(e) => props.screen !== 'constructor' && dispatch(setOverElement(props.value))}
		onDragLeave={(e) => props.screen !== 'constructor' && dispatch(setOverElement(''))}
		style={stylesEl}
	>
		{props.children}
	</div>
}