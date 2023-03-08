import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteSection, setDragElement, setOverElement, reorderItems} from "../../reducer/actions";
import {dragStore, IDragWrapperProps, IViewStore} from "../../dto";


export const DragWrapper = (props: IDragWrapperProps) => {
	const dispatch = useDispatch()
	const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
		e.dataTransfer.setData('el', props.value)
		dispatch(setDragElement(props.value))
	}
	const mode = useSelector((state:IViewStore) => state.viewData.mode)
	const dragEl = useSelector((state: dragStore) => state.dragData.dragElement)
	const overEl = useSelector((state: dragStore) => state.dragData.overElement)
	const pseudoClass = `${(props.value === overEl && props.screen !== 'constructor') ? 'pseudoClass' : ''}`
	//todo add debounce to dragover
	const draggable = !(mode=='runtime' || props.blocked)
	return <div
		draggable={draggable}
		onDoubleClick={() => mode!=='runtime' && dispatch(deleteSection(props.value))}
		onDragStart={(e) => dragStart(e)}
		onDrop={(e) => {
			if (props.screen === 'constructor') return
			dispatch(reorderItems({drag: dragEl, over: overEl}))
			dispatch(setDragElement(''))
			dispatch(setOverElement(''))
		}}
		onDragOver={(e) => props.screen !== 'constructor' && props.value!=='dataString'  && dispatch(setOverElement(props.value))}
		onDragLeave={(e) => props.screen !== 'constructor' && dispatch(setOverElement(''))}
		className={`${pseudoClass} ${props.blocked && 'opacity'}`}
	>
		{props.children}
	</div>
}