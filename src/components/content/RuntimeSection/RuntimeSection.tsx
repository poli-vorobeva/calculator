import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, IViewStore} from "../../common/dto";
import {addSection} from '../../../reducer/actions'
import {DragWrapper} from "../../hoc/drag/DragWrapper";
import {Display} from "../../sections/Display";
import {Actions} from "../../sections/actions/Actions";
import {Numbers} from "../../sections/numbers/Numbers";
import {Equal} from "../../sections/Equal";
import {EmptySection} from "../../UI/EmptySection";
import './style.css'

export const RuntimeSection = (): JSX.Element => {
	const sectionsData: string[] = useSelector((state: IViewStore) => state.viewData.constructorData)
	const dispatch = useDispatch<AppDispatch>()
	const content = {
		dataString: <Display/>,
		actions: <Actions/>,
		numbers: <Numbers/>,
		equal: <Equal/>
	}
	const dropHandler = (e: React.DragEvent<HTMLDivElement>): void => {
		e.preventDefault()
		dispatch(addSection(e.dataTransfer.getData('el')))
	}
	const className = `section right ${!sectionsData.length ? "rightFlex" : 'flexStart'}`
	return (
		<div className={className}
				 onDragOver={(e) => e.preventDefault()}
				 onDrop={(e) => dropHandler(e)}
		>
			{
				sectionsData.length
					?
					sectionsData.map((sec: string) =>
						<DragWrapper blocked={false} key={sec} screen={'view'} value={sec}>
							{content[sec as keyof typeof content]}
						</DragWrapper>)
					: <EmptySection/>
			}
		</div>
	)
}