import "./Translate"

import { ParticlesX } from "github.com/octarine-private/immortal-core/index"
import {
	EventsSDK,
	LocalPlayer,
	Color
} from "github.com/octarine-public/wrapper/index"


const pSDK = new ParticlesX()
const geg = new Color()
EventsSDK.on("Draw", () => {

	pSDK.DrawFatRing(LocalPlayer.Handle, LocalPlayer, {
		Position: LocalPlayer.Hero.VisualPosition,
		Radius: 500,
		Color: Color.Blue
	})
	})