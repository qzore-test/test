import "./Translate"

import { ParticlesX } from "github.com/octarine-private/immortal-core/index"
import {
	EventsSDK,
	LocalPlayer
} from "github.com/octarine-public/wrapper/index"


const pSDK = new ParticlesX()

EventsSDK.on("Draw", () => {
	if(LocalPlayer.Hero.IsVisibleForEnemies) {
	pSDK.DrawBox(LocalPlayer.Handle, LocalPlayer, {
		Position: LocalPlayer.Hero.VisualPosition,
		Color: 225,
		Alpha: 41,
		Radius: 500
	})}
})
