import * as React from "react";
import {Provider} from "react-redux";
import store from "./store";
import {LeftSection} from "./components/LeftSection/LeftSection";
import {RightSection} from "./components/RightSection/RightSection";
import './styles.css'
export const App = () => {
	return (
		<Provider store={store}>
			<div className="wrapper">
				<LeftSection/>
				<RightSection/>
			</div>
		</Provider>

	)
}