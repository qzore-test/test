import "./Translate"

import { ParticlesX } from "github.com/octarine-private/immortal-core/index"
import {
	EventsSDK,
	LocalPlayer,
	Color
} from "github.com/octarine-public/wrapper/index"


const pSDK = new ParticlesX()
EventsSDK.on("Draw", () => {
	const position = w2sPosition.Subtract(vectorSize.DivideScalar(2))
	console.log(position)
	})