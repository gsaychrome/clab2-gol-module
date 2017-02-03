var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
"use strict";
var Clab2;
(function (Clab2) {
    var Golapi;
    (function (Golapi) {
        var GameController = (function () {
            function GameController(gameService, settings) {
                var _this = this;
                this.gameService = gameService;
                this.settings = settings;
                this.gameService.init().then(function (response) {
                    _this._space = response;
                });
            }
            Object.defineProperty(GameController.prototype, "space", {
                get: function () {
                    return this._space;
                },
                enumerable: true,
                configurable: true
            });
            GameController.prototype.step = function () {
                var _this = this;
                this.gameService.next(this._space).then(function (response) {
                    _this._space = response;
                });
            };
            return GameController;
        }());
        Golapi.GameController = GameController;
    })(Golapi = Clab2.Golapi || (Clab2.Golapi = {}));
})(Clab2 || (Clab2 = {}));
"use strict";
var Clab2;
(function (Clab2) {
    var Golapi;
    (function (Golapi) {
        var GameRestClient = (function (_super) {
            __extends(GameRestClient, _super);
            function GameRestClient() {
                _super.apply(this, arguments);
            }
            GameRestClient.prototype["next"] = function (space) {
                return this.http.post(this.buildURL("/golapi/game/next"), space);
            };
            GameRestClient.prototype["init"] = function () {
                return this.http.get(this.buildURL("/golapi/game/init"));
            };
            return GameRestClient;
        }(Clab2.Http.RestClient));
        Golapi.GameRestClient = GameRestClient;
    })(Golapi = Clab2.Golapi || (Clab2.Golapi = {}));
})(Clab2 || (Clab2 = {}));
"use strict";
var GameController = Clab2.Golapi.GameController;
var GameRestClient = Clab2.Golapi.GameRestClient;
var module = angular.module("Clab2.Golapi", ["ngRoute", "Clab2.Component", "ngDraggable", "ngAnimate", "ui.bootstrap", "pascalprecht.translate"]);
modules.push(module.name);
module.provider("gameRestClient", ["settingsProvider", function (settings) {
        return {
            $get: ["httpProxy", function (httpProxy) {
                    return new GameRestClient(httpProxy, settings.endPointBase);
                }]
        };
    }]);
module.controller("gameController", ["gameRestClient", "settings", GameController]);
module.component("livingSpace", {
    templateUrl: ["settings", function (settings) {
            return settings.getModuleSettings("clab2-gol-module").createTemplateURL("living-space.html");
        }],
    controller: ["gameRestClient", "settings", GameController],
    bindings: {
        "template": "@"
    }
});
"use strict";
var Clab2;
(function (Clab2) {
    var Golapi;
    (function (Golapi) {
        var Model;
        (function (Model) {
            function createLivingSpace() {
                return {
                    step: null,
                    width: null,
                    height: null,
                    cells: []
                };
            }
            Model.createLivingSpace = createLivingSpace;
        })(Model = Golapi.Model || (Golapi.Model = {}));
    })(Golapi = Clab2.Golapi || (Clab2.Golapi = {}));
})(Clab2 || (Clab2 = {}));
//# sourceMappingURL=clab2-gol-module.js.map