"use strict";
/**
* Generated REST client for LivingSpace*/
namespace Clab2.Golapi {

    export interface ILivingSpaceRestClient {
                "load"(space ?: any) : angular.IPromise<Clab2.Golapi.Model.ILivingSpace>;
                "samples"() : angular.IPromise<Array<any>>;
            }

    export class LivingSpaceRestClient extends Clab2.Http.RestClient implements ILivingSpaceRestClient {
        
         public "load"(space ?: any) : angular.IPromise<Clab2.Golapi.Model.ILivingSpace> {
            return this.http.post(this.buildURL("/golapi/space/load"), space);
         }
        
         public "samples"() : angular.IPromise<Array<any>> {
            return this.http.get(this.buildURL("/golapi/space/samples"));
         }
            }
}