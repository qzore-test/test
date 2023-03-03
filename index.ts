import { Color, EventsSDK, GUIInfo, RendererSDK, Vector2, Vector3, LocalPlayer, TickSleeper } from "github.com/octarine-public/wrapper/index"

// const seleeper = new TickSleeper()
// seleeper.Sleep(50)
EventsSDK.on("Draw", () => {
	const kek = LocalPlayer.Hero.VisualPosition.x
	const kek1 = LocalPlayer.Hero.VisualPosition.y

	const text = `${kek}`
	const w2sPosition = RendererSDK.WorldToScreen(LocalPlayer.Hero.VisualPosition)
	
	const vectorSize = new Vector2()
	const position = w2sPosition.Subtract(vectorSize.DivideScalar(2))
	const vectorSize1 = new Vector2(kek, kek1)
		RendererSDK.Line(
			position,
			vectorSize1
			)
		
		// RendererSDK.Text(
		// 	text,
		// 	position
		// )

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
