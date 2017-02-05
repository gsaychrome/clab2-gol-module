"use strict";

/**
 * Generated model for LivingSpace */
namespace Clab2.Golapi.Model {

    export interface ILivingSpace extends Clab2.Application.Model.IData {
        id? : number;
        name? : string;
        description? : string;
        step? : number;
        width? : number;
        height? : number;
        cells? : Array<any>;
    }

    export function createLivingSpace() : ILivingSpace {
        return {
            id: null,
            name: null,
            description: null,
            step: null,
            width: null,
            height: null,
            cells: []
        };
    }

}