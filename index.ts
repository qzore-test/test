import "./Translate"

import { ParticlesX } from "github.com/octarine-private/immortal-core/index"
import {
	EventsSDK,
	LocalPlayer,
	Color
} from "github.com/octarine-public/wrapper/index"


const pSDK = new ParticlesX()
EventsSDK.on("Draw", () => {

	pSDK.DrawTimerRange(LocalPlayer.Handle, LocalPlayer, {
		Position: LocalPlayer.Hero.VisualPosition,
		Radius: 5000,
		Color: Color.Blue
	})
	})