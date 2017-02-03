"use strict";

/**
 * Generated model for LivingSpace */
namespace Clab2.Golapi.Model {

    export interface ILivingSpace extends Clab2.Application.Model.IData {
        step? : number;
        width? : number;
        height? : number;
        cells? : Array<any>;
    }

    export function createLivingSpace() : ILivingSpace {
        return {
            step: null,
            width: null,
            height: null,
            cells: []
        };
    }

}