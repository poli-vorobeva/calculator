import * as React from "react";
import {Provider, useSelector} from "react-redux";
import store from "./store";
import {LeftSection} from "./components/LeftSection/LeftSection";
import {RightSection} from "./components/RightSection/RightSection";
import './styles.css'
import {ModeRadio} from "./components/UI/modeRadio";
import {IViewStore} from "./dto";

export const App = () => {
	const modeData: Array<'constructor' | 'runtime'> = ['constructor', 'runtime']
	const mode = useSelector((state:IViewStore) => state.viewData.mode)

	console.log("MODE",mode)
	return (

			<div className="wrapper">
				{
					modeData.map((m, i) => <ModeRadio mode={m}/>)
				}
				{mode!=='runtime' && <LeftSection/>}
				<RightSection/>
			</div>


	)
}