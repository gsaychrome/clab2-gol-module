declare namespace Clab2.Golapi {
    import ILivingSpace = Clab2.Golapi.Model.ILivingSpace;
    class GameController {
        private gameService;
        private spaceService;
        private settings;
        private _space;
        private _running;
        private _timer;
        private _change;
        selectedExample: string;
        selectedSpace: number;
        examples: Array<string>;
        spaces: Array<ILivingSpace>;
        name: string;
        saveByName: boolean;
        constructor(gameService: Clab2.Golapi.IGameRestClient, spaceService: Clab2.Golapi.ILivingSpaceRestClient, settings: Clab2.ISettings);
        refreshSavedSpaces(): void;
        space: ILivingSpace;
        isRunning: boolean;
        width: number;
        height: number;
        isChanged: boolean;
        setSize(): void;
        step(): void;
        startIteration(): void;
        stopIteration(): void;
        toggle(i: number, j: number): void;
        load(): void;
        open(): void;
        saveName(): void;
        protected saveData(): void;
        protected getSelectedSpace(): ILivingSpace;
        saveAs(): void;
        save(): void;
        cancelSaveAs(): void;
        exampleIsSelected: boolean;
        spaceIsSelected: boolean;
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
declare namespace Clab2.Golapi {
    interface ILivingSpaceRestClient {
        "load"(space?: any): angular.IPromise<Clab2.Golapi.Model.ILivingSpace>;
        "samples"(): angular.IPromise<Array<any>>;
        "saved"(): angular.IPromise<Array<Clab2.Golapi.Model.IRestListLivingSpace>>;
        "get"(id: number): angular.IPromise<Clab2.Golapi.Model.ILivingSpace>;
        "save"(space?: any): angular.IPromise<Clab2.Golapi.Model.ILivingSpace>;
    }
    class LivingSpaceRestClient extends Clab2.Http.RestClient implements ILivingSpaceRestClient {
        "load"(space?: any): angular.IPromise<Clab2.Golapi.Model.ILivingSpace>;
        "samples"(): angular.IPromise<Array<any>>;
        "saved"(): angular.IPromise<Array<Clab2.Golapi.Model.IRestListLivingSpace>>;
        "get"(id: number): angular.IPromise<Clab2.Golapi.Model.ILivingSpace>;
        "save"(space?: any): angular.IPromise<Clab2.Golapi.Model.ILivingSpace>;
    }
}
import GameController = Clab2.Golapi.GameController;
import GameRestClient = Clab2.Golapi.GameRestClient;
import ILivingSpaceRestClient = Clab2.Golapi.ILivingSpaceRestClient;
import LivingSpaceRestClient = Clab2.Golapi.LivingSpaceRestClient;
declare var module: angular.IModule;
declare var modules: Array<string>;
declare namespace Clab2.Golapi.Model {
    interface ILivingSpace extends Clab2.Application.Model.IData {
        id?: number;
        name?: string;
        description?: string;
        step?: number;
        width?: number;
        height?: number;
        cells?: Array<any>;
    }
    function createLivingSpace(): ILivingSpace;
}
declare namespace Clab2.Golapi.Model {
    interface ILoadingData {
        name?: string;
        width?: number;
        height?: number;
    }
    function createLoadingData(): ILoadingData;
}
declare namespace Clab2.Golapi.Model {
    interface IRestListLivingSpace {
        id?: number;
        name?: string;
        savedOn?: number;
    }
    function createRestListLivingSpace(): IRestListLivingSpace;
}
