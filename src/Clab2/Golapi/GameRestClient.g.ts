"use strict";
/**
* Generated REST client for Game*/
namespace Clab2.Golapi {

    export interface IGameRestClient {
                "next"(space ?: any) : angular.IPromise<Clab2.Golapi.Model.ILivingSpace>;
                "init"() : angular.IPromise<Clab2.Golapi.Model.ILivingSpace>;
            }

    export class GameRestClient extends Clab2.Http.RestClient implements IGameRestClient {
        
         public "next"(space ?: any) : angular.IPromise<Clab2.Golapi.Model.ILivingSpace> {
            return this.http.post(this.buildURL("/golapi/game/next"), space);
         }
        
         public "init"() : angular.IPromise<Clab2.Golapi.Model.ILivingSpace> {
            return this.http.get(this.buildURL("/golapi/game/init"));
         }
            }
}