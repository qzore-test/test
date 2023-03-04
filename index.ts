import { Color, EventsSDK, GUIInfo, RendererSDK, Vector2, Vector3, LocalPlayer, EntityManager, AeonDisk, item_blink } from "github.com/octarine-public/wrapper/index"

EventsSDK.on("Draw", () => {
	const kek = LocalPlayer.Hero.VisualPosition

	const text = `${kek}`
	if (LocalPlayer.Hero.HPRegen < 3)
	{
	const w2sPosition = RendererSDK.WorldToScreen(LocalPlayer.Hero.VisualPosition)
	const w2sPosition1 = RendererSDK.WorldToScreen(new Vector2(-1763.5, 1172.40625))
	
	const vectorSize = new Vector2()
	const position = w2sPosition.Subtract(vectorSize.DivideScalar(2))
	const positionEnd = w2sPosition1.Subtract(vectorSize.DivideScalar(2))
	const MyHero = LocalPlayer?.Hero
	const kekus = MyHero.GetItemByClass(AeonDisk)
	console.log(kekus)
			RendererSDK.Line(
				position,
				positionEnd
				)
		}
		
		
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

