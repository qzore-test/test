import { Color, EventsSDK, GUIInfo, RendererSDK, Vector2, Vector3, LocalPlayer } from "github.com/octarine-public/wrapper/index"


EventsSDK.on("Draw", () => {
	const w2sPosition = RendererSDK.WorldToScreen(LocalPlayer.Hero.VisualPosition)

	// console.log(w2sPosition)

	const vectorSize = new Vector2(LocalPlayer.Hero.VisualPosition.x, LocalPlayer.Hero.VisualPosition.y)
	const vectorkek = new Vector2(-2488, 1271)
	const position = w2sPosition.Subtract(vectorSize.DivideScalar(2))
	const text = 'TY LOX'
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
