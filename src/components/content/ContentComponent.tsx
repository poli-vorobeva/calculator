import {ConstructorSection} from "./ConstructorSection/ConstructorSection";
import {RuntimeSection} from "./RuntimeSection/RuntimeSection";
import * as React from "react";
import {IViewStore, modeType} from "../common/dto";
import {useSelector} from "react-redux";

export const ContentComponent=():JSX.Element=>{
	const mode:modeType = useSelector((state: IViewStore) => state.viewData.mode)
	return(
		<div className="wrapper">
			<ConstructorSection mode={mode}/>
			<RuntimeSection/>
		</div>
	)
}