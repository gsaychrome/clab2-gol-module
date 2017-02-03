"use strict";
import GameController = Clab2.Golapi.GameController;
import GameRestClient = Clab2.Golapi.GameRestClient;

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

module.controller("gameController", ["gameRestClient", "settings", GameController]);

module.component("livingSpace", {
    templateUrl: ["settings", function (settings: Clab2.ISettings) {
        return settings.getModuleSettings("clab2-gol-module").createTemplateURL("living-space.html");
    }],
    controller: ["gameRestClient", "settings", GameController],
    bindings: {
        "template": "@"
    }
});
