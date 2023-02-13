import "./Translate"

import { ParticlesX } from "github.com/octarine-private/immortal-core/index"
import {
	EventsSDK,
	LocalPlayer,
	monkey_king_tree_dance,
	EntityManager
} from "github.com/octarine-public/wrapper/index"


const pSDK = new ParticlesX()

EventsSDK.on("Draw", () => {
	if(LocalPlayer.Hero.IsVisibleForEnemies) {
	pSDK.DrawBox(LocalPlayer.Handle, LocalPlayer, {
		Position: LocalPlayer.Hero.VisualPosition,
		Color: 225,
		Alpha: 100,
		Radius: 500
	})
	EntityManager.GetEntitiesByClass(monkey_king_tree_dance).some(abil => {
		console.log(abil)
		
	})
}})
// next step
// EventsSDK.on("UnitVisibilityChanged", () => {
// console.log("npc")
// })

