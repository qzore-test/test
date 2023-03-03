import { Color, GUIInfo, RendererSDK, Vector2, Vector3 } from "github.com/octarine-public/wrapper/index"




	public OnDraw() {
		console.log('123')
		const w2sPosition = RendererSDK.WorldToScreen(this.Position)

		console.log(w2sPosition + '123')

		const vectorSize = new Vector2(GUIInfo.ScaleWidth(100), GUIInfo.ScaleWidth(100))

		const position = w2sPosition.Subtract(vectorSize.DivideScalar(2))

			RendererSDK.Image(
				"panorama/images/spellicons/modifier_illusion_png.vtex_c",
				position,
				0,
				vectorSize,
				Color.White.SetA(50)
			)
			// RendererSDK.OutlinedCircle(
			// 	position,
			// 	vectorSize,
			// 	this.PlayerColor.SetA(Opacity),
			// 	GUIInfo.ScaleHeight(Size) / 15
			// )
			// return


		// RendererSDK.FilledCircle(position, vectorSize, Color.Yellow.SetA(Opacity))
		// RendererSDK.OutlinedCircle(position, vectorSize, this.PlayerColor.SetA(Opacity), GUIInfo.ScaleHeight(Size) / 15)
	}
