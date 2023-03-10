import {useEffect, useRef, useState} from "react";
import {addAction, addNumber, equal} from "../reducer/actions";
import {actions} from "./consts";
import {useDispatch, useSelector} from "react-redux";
import {IViewStore} from "../dto";
import * as React from "react";

export const KeyPressComponent = (props: { children: JSX.Element }) => {
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
		<>
			{props.children}
		</>
	)
}