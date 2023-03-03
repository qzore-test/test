import { Color, EventsSDK, GUIInfo, RendererSDK, Vector2, Vector3, LocalPlayer, TickSleeper } from "github.com/octarine-public/wrapper/index"

// const seleeper = new TickSleeper()
// seleeper.Sleep(50)
EventsSDK.on("Draw", () => {
	const kek = LocalPlayer.Hero.VisualPosition

	const text = `${kek}`
	const w2sPosition = RendererSDK.WorldToScreen(LocalPlayer.Hero.VisualPosition)
	const w2sPosition1 = RendererSDK.WorldToScreen(new Vector2(-1763.5, 1172.40625))
	
	const vectorSize = new Vector2()
	const position = w2sPosition.Subtract(vectorSize.DivideScalar(2))
	const positionEnd = w2sPosition1.Subtract(vectorSize.DivideScalar(2))

		RendererSDK.Line(
			position,
			positionEnd
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
