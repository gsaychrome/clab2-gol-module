"use strict";

namespace Clab2.Golapi
{
	import ILivingSpace = Clab2.Golapi.Model.ILivingSpace;
	export class GameController {
		private _space:ILivingSpace;

		public constructor(private gameService:Clab2.Golapi.IGameRestClient,
						   private settings:Clab2.ISettings) {

			this.gameService.init().then(
				(response) => {
					this._space = response;
				}
			);
		}

		public get space() {
			return this._space;
		}

		public step() {
			this.gameService.next(this._space).then(
				(response) => {
					this._space = response;
				}
			);
		}

	}
}