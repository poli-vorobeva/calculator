import * as React from "react";
import {Provider, useSelector} from "react-redux";
import store from "./store";
import {LeftSection} from "./components/LeftSection/LeftSection";
import {RightSection} from "./components/RightSection/RightSection";
import './styles.css'
import {ModeRadio} from "./components/UI/modeRadio";
import {IViewStore} from "./dto";

export const App = () => {
	const modeData: Array<'constructor' | 'runtime'> = ['runtime','constructor']
	const mode = useSelector((state: IViewStore) => state.viewData.mode)
	return (
		<div className={'app'}>
			<div className={'mode'}>
				<div className={'modeWrapper'}>
					{
						modeData.map((m, i) => <ModeRadio mode={m}/>)
					}
				</div>

			</div>
			<div className="wrapper">
				{mode !== 'runtime' && <LeftSection/>}
				<RightSection/>
			</div>
		</div>
	)
}