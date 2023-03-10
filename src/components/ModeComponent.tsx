import {ModeRadio} from "./UI/modeRadio";
import * as React from "react";
import {modeType} from "./common/dto";

export const ModeComponent=():JSX.Element=>{
	const modeData: Array<modeType> = ["runtime", "constructor"]
	return(
		<div className="mode">
			<div className="modeWrapper">
				{
					modeData.map((m, i) => <ModeRadio mode={m}/>)
				}
			</div>
		</div>
	)
}