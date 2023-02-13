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
	EntityManager.EntityByIndex(1337).some(abil => {
		console.log(abil)	

	})
	EntityManager.AllEntities.some(abil1 => {
		console.log(abil1)
	})
}})

// next step
// EventsSDK.on("UnitVisibilityChanged", () => {
// console.log("npc")
// })

