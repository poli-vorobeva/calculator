import * as React from "react";
import "./styles.css"
import {KeyPressComponent} from "./components/hoc/KeyPressComponent";
import {ModeComponent} from "./components/ModeComponent";
import {ContentComponent} from "./components/content/ContentComponent";

export const App = (): JSX.Element => {
	return (
		<KeyPressComponent>
			<div className="app">
				<ModeComponent/>
				<ContentComponent/>
			</div>
		</KeyPressComponent>
	)
}