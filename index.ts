// import "./Translate"

// import { ParticlesX } from "github.com/octarine-private/immortal-core/index"
// import {
// 	EventsSDK,
// 	LocalPlayer,
// 	monkey_king_tree_dance,
// 	EntityManager
// } from "github.com/octarine-public/wrapper/index"


// const pSDK = new ParticlesX()

// EventsSDK.on("Draw", () => {
// 	const MyHero = LocalPlayer?.Hero
// 	if(LocalPlayer.Hero.IsVisibleForEnemies) {
// 	pSDK.DrawBox(LocalPlayer.Handle, LocalPlayer, {
// 		Position: LocalPlayer.Hero.VisualPosition,
// 		Color: 225,
// 		Alpha: 100,
// 		Radius: 500
// 	})
// 	// EntityManager.GetEntitiesByClass(monkey_king_tree_dance).some(abil => {
// 	// 	console.log(abil)	
// 		const castAbil = MyHero.GetItemByName('item_quelling_blade')
// 		console.log(castAbil)
// 	// })
// }})

// // next step
// // EventsSDK.on("UnitVisibilityChanged", () => {
// // console.log("npc")
// // })



import "./Translate"

// import { ParticlesX } from "github.com/octarine-private/immortal-core/index"
import {
	EventsSDK,
	LocalPlayer,
	RendererSDK,
	Vector2
} from "github.com/octarine-public/wrapper/index"


// const pSDK = new ParticlesX()
const test = new RendererSDK()
const vec2 = new Vector2()
EventsSDK.on("Draw", () => {
	test.Text({
		text: 'tt',
		vecPos: LocalPlayer.Hero.Position,
	}
	)




	// if(LocalPlayer.Hero.IsVisibleForEnemies) {
	// pSDK.DrawBox(LocalPlayer.Handle, LocalPlayer, {
	// 	Position: LocalPlayer.Hero.VisualPosition,
	// 	Color: 225,
	// 	Alpha: 100,
	// 	Radius: 500
	// })}
})
