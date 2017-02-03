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

		public start() {

		}

		public toggle(i: number, j: number) {
			if(i>=0&&i<this._space.height&&j>=0&&j<this._space.width) {
				this._space.cells[i][j] = this._space.cells[i][j] == 0 ? 1 : 0;
			}
		}
	}
}