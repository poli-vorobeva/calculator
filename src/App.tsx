import * as React from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "./store";
import {ConstructorSection} from "./components/ConstructorSection/ConstructorSection";
import {RuntimeSection} from "./components/RuntimeSection/RuntimeSection";
import './styles.css'
import {ModeRadio} from "./components/UI/modeRadio";
import {IViewStore} from "./dto";
import {addAction, addNumber, equal} from "./reducer/actions";
import {actions} from "./components/consts";
import {Dispatch, useEffect, useRef, useState} from "react";

export const App = () => {
	const modeData: Array<'constructor' | 'runtime'> = ['runtime', 'constructor']
	const mode = useSelector((state: IViewStore) => state.viewData.mode)
	const modeR = useRef('constructor')

	const dispatch = useDispatch()
	const [listen, setListen] = useState(false)
	const keypressHandler = (e: KeyboardEvent) => {
		if (modeR.current !== 'runtime') return
		if (+e.key >= 0 && +e.key <= 9 || e.key === '.') dispatch(addNumber('' + e.key))
		else if (acts.includes(e.key)) {
			const act = Object.entries(actions).find(el => el[1] === e.key)
			dispatch(addAction(act[0]))
		} else if (e.key === '=') {
			dispatch(equal())
		}
	}
	useEffect(() => {
		if (!listen) document.addEventListener('keypress', keypressHandler)
		setListen(true)
	}, [])
	useEffect(() => {
		modeR.current = mode
	}, [mode])
	const acts = ['/', '*', '-', '+']

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
				<ConstructorSection mode={mode}/>
				<RuntimeSection/>
			</div>
		</div>
	)
}