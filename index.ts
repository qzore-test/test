import { Color, EventsSDK, GUIInfo, RendererSDK, Vector2, Vector3, LocalPlayer, TickSleeper } from "github.com/octarine-public/wrapper/index"

const seleeper = new TickSleeper()
EventsSDK.on("Draw", () => {
	console.log(seleeper)
	let kek = seleeper.Sleep
	const text = `${kek} TY LOX, a YA NET`
	const w2sPosition = RendererSDK.WorldToScreen(LocalPlayer.Hero.VisualPosition)

	// console.log(w2sPosition)
	
	const vectorSize = new Vector2(GUIInfo.ScaleWidth(0), GUIInfo.ScaleWidth(0))
	const position = w2sPosition.Subtract(vectorSize.DivideScalar(2))
		RendererSDK.Text(
			text,
			position
		)

		// RendererSDK.Image(
		// 	"panorama/images/spellicons/modifier_illusion_png.vtex_c",
		// 	position,
		// 	0,
		// 	vectorSize,
		// )
	})

		// RendererSDK.OutlinedCircle(
		// 	position,
		// 	vectorSize,
		// 	this.PlayerColor.SetA(Opacity),
		// 	GUIInfo.ScaleHeight(Size) / 15
		// )
		// return


	// RendererSDK.FilledCircle(position, vectorSize, Color.Yellow.SetA(Opacity))
	// RendererSDK.OutlinedCircle(position, vectorSize, this.PlayerColor.SetA(Opacity), GUIInfo.ScaleHeight(Size) / 15
