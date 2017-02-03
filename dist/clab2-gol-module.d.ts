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
