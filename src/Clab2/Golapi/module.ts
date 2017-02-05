"use strict";
import GameController = Clab2.Golapi.GameController;
import GameRestClient = Clab2.Golapi.GameRestClient;
import ILivingSpaceRestClient = Clab2.Golapi.ILivingSpaceRestClient;
import LivingSpaceRestClient = Clab2.Golapi.LivingSpaceRestClient;

var module: angular.IModule = angular.module("Clab2.Golapi", ["ngRoute", "Clab2.Component", "ngDraggable", "ngAnimate", "ui.bootstrap", "pascalprecht.translate"]);

declare var modules: Array<string>;
modules.push(module.name);

module.provider("gameRestClient", ["settingsProvider", function(settings : Clab2.ISettingsProvider) {
    return {
        $get: ["httpProxy", function(httpProxy : Clab2.Http.IProxy) : GameRestClient {
            return new GameRestClient(httpProxy, settings.endPointBase);
        }]
    }
}]);

module.provider("spaceRestClient", ["settingsProvider", function(settings : Clab2.ISettingsProvider) {
    return {
        $get: ["httpProxy", function(httpProxy : Clab2.Http.IProxy) : LivingSpaceRestClient {
            return new LivingSpaceRestClient(httpProxy, settings.endPointBase);
        }]
    }
}]);

module.controller("gameController", ["gameRestClient", "spaceRestClient", "settings", GameController]);

module.component("livingSpace", {
    templateUrl: ["settings", function (settings: Clab2.ISettings) {
        return settings.getModuleSettings("clab2-gol-module").createTemplateURL("living-space.html");
    }],
    controller: ["gameRestClient", "spaceRestClient", "settings", GameController],
    bindings: {
        "template": "@"
    }
});
