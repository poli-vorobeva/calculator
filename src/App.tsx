import * as React from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "./store";
import {ConstructorSection} from "./components/ConstructorSection/ConstructorSection";
import {RuntimeSection} from "./components/RuntimeSection/RuntimeSection";
import './styles.css'
import {ModeRadio} from "./components/UI/modeRadio";
import {IViewStore} from "./dto";
import {KeyPressComponent} from "./components/KeyPressComponent";

export const App = () => {
	const modeData: Array<'constructor' | 'runtime'> = ['runtime', 'constructor']
	const mode = useSelector((state: IViewStore) => state.viewData.mode)
	return (
		<KeyPressComponent>
			<div className={'app'}>
				<div className={'mode'}>
					<div className={'modeWrapper'}>
						{
							modeData.map((m, i) => <ModeRadio mode={m}/>)
						}
					</div>

				</div>
				<div className="wrapper">
					<ConstructorSection mode={mode}/>
					<RuntimeSection/>
				</div>
			</div>
		</KeyPressComponent>
	)
}