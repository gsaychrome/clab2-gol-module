"use strict";

var module: angular.IModule = angular.module("Clab2.Gol", ["ngRoute", "Clab2.Component", "ngDraggable", "ngAnimate", "ui.bootstrap", "pascalprecht.translate"]);

declare var modules: Array<string>;
modules.push(module.name);

//module.controller("golController", ["$rootScope", "menuRestClient", "$location", "settings", "$state", "$stateParams", "httpProxy", "userRestClient", "config", "imageGalleryRestClient", "$q", "$filter", CmsController]);

// module.component("livingSpace", {
//     templateUrl: ["settings", function (settings: Clab2.ISettings) {
//         return settings.getModuleSettings("clab2-cms-module").createTemplateURL("group-box.html");
//     }],
//     controller: ["menuRestClient", "settings", "$rootScope", Clab2.Cms.GroupBoxController],
//     bindings: {
//         "template": "@",
//         "count": "@",
//         "groupCode": "@"
//     }
// });
