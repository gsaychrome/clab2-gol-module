declare namespace Clab2.Golapi {
    import ILivingSpace = Clab2.Golapi.Model.ILivingSpace;
    class GameController {
        private gameService;
        private settings;
        private _space;
        constructor(gameService: Clab2.Golapi.IGameRestClient, settings: Clab2.ISettings);
        space: ILivingSpace;
        step(): void;
    }
}
declare namespace Clab2.Golapi {
    interface IGameRestClient {
        "next"(space?: any): angular.IPromise<Clab2.Golapi.Model.ILivingSpace>;
        "init"(): angular.IPromise<Clab2.Golapi.Model.ILivingSpace>;
    }
    class GameRestClient extends Clab2.Http.RestClient implements IGameRestClient {
        "next"(space?: any): angular.IPromise<Clab2.Golapi.Model.ILivingSpace>;
        "init"(): angular.IPromise<Clab2.Golapi.Model.ILivingSpace>;
    }
}
import GameController = Clab2.Golapi.GameController;
import GameRestClient = Clab2.Golapi.GameRestClient;
declare var module: angular.IModule;
declare var modules: Array<string>;
declare namespace Clab2.Golapi.Model {
    interface ILivingSpace extends Clab2.Application.Model.IData {
        step?: number;
        width?: number;
        height?: number;
        cells?: Array<any>;
    }
    function createLivingSpace(): ILivingSpace;
}
