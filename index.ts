import "./Translate"

import { ParticlesX } from "github.com/octarine-private/immortal-core/index"
import {
	EventsSDK,
	LocalPlayer,
	Color
} from "github.com/octarine-public/wrapper/index"


const pSDK = new ParticlesX()
EventsSDK.on("Draw", () => {

	pSDK.DrawArrow2D(LocalPlayer.Handle, LocalPlayer, {
		PositionStart: LocalPlayer.Hero.VisualPosition,
		Color: Color.Blue
	})
	})