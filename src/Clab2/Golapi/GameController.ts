"use strict";

namespace Clab2.Golapi
{
	import ILivingSpace = Clab2.Golapi.Model.ILivingSpace;
	export class GameController {
		private _space:ILivingSpace;
		private _running:boolean = false;
		private _timer = null;

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

		public get isRunning() {
			return this._running;
		}

		public step() {
			var self = this;
			clearTimeout(this._timer);
			this.gameService.next(this._space).then(
				(response) => {
					this._space = response;
					if(this._running) {
						this._timer = setTimeout(function () {
							self.step();
						}, 1);
					}
				}
			);
		}

		public startIteration() {
			if(this._running) {
				return;
			}
			this._running = true;
			this.step();
		}

		public stopIteration() {
			this._running = false;
			clearTimeout(this._timer);
		}

		public toggle(i: number, j: number) {
			if(this._running) {
				return;
			}
			if(i>=0&&i<this._space.height&&j>=0&&j<this._space.width) {
				this._space.cells[i][j] = this._space.cells[i][j] == 0 ? 1 : 0;
			}
		}
	}
}