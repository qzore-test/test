import "./Translate"

import { ParticlesX } from "github.com/octarine-private/immortal-core/index"
import {
	EventsSDK,
	LocalPlayer,
} from "github.com/octarine-public/wrapper/index"


const pSDK = new ParticlesX()

EventsSDK.on("Draw", () => {

	pSDK.DrawBox(LocalPlayer.Handle, LocalPlayer, {
		Radius: 500
	})
	})