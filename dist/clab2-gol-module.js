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
            function GameController(gameService, spaceService, settings) {
                var _this = this;
                this.gameService = gameService;
                this.spaceService = spaceService;
                this.settings = settings;
                this._space = null;
                this._running = false;
                this._timer = null;
                this._change = false;
                this.gameService.init().then(function (response) {
                    _this._space = response;
                });
                this.spaceService.samples().then(function (response) {
                    _this.examples = response;
                });
            }
            Object.defineProperty(GameController.prototype, "space", {
                get: function () {
                    return this._space;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GameController.prototype, "isRunning", {
                get: function () {
                    return this._running;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GameController.prototype, "width", {
                get: function () {
                    return this._space == null ? 0 : this._space.width;
                },
                set: function (w) {
                    if (this._space == null) {
                        return;
                    }
                    this._space.width = w;
                    this._change = true;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GameController.prototype, "height", {
                get: function () {
                    return this._space == null ? 0 : this._space.height;
                },
                set: function (h) {
                    if (this._space == null) {
                        return;
                    }
                    this._space.height = h;
                    this._change = true;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GameController.prototype, "isChanged", {
                get: function () {
                    return this._change;
                },
                enumerable: true,
                configurable: true
            });
            GameController.prototype.setSize = function () {
                if (this._space == null) {
                    return;
                }
                var cells = [];
                for (var i = 0; i < this._space.height; i++) {
                    cells.push([]);
                    for (var j = 0; j < this._space.width; j++) {
                        if (i < this._space.cells.length && j < this._space.cells[i].length) {
                            cells[i].push(this._space.cells[i][j]);
                        }
                        else {
                            cells[i].push(0);
                        }
                    }
                }
                this._space.cells = cells;
                this._change = false;
            };
            GameController.prototype.step = function () {
                var _this = this;
                var self = this;
                clearTimeout(this._timer);
                this.gameService.next(this._space).then(function (response) {
                    _this._space = response;
                    if (_this._running) {
                        _this._timer = setTimeout(function () {
                            self.step();
                        }, 1);
                    }
                });
            };
            GameController.prototype.startIteration = function () {
                if (this._running) {
                    return;
                }
                this._running = true;
                this.step();
            };
            GameController.prototype.stopIteration = function () {
                this._running = false;
                clearTimeout(this._timer);
            };
            GameController.prototype.toggle = function (i, j) {
                if (this._running) {
                    return;
                }
                if (i >= 0 && i < this._space.height && j >= 0 && j < this._space.width) {
                    this._space.cells[i][j] = this._space.cells[i][j] == 0 ? 1 : 0;
                }
            };
            GameController.prototype.load = function () {
                var _this = this;
                if (this.selectedExample + '' != 'undefined') {
                    var data = Clab2.Golapi.Model.createLoadingData();
                    data.name = this.selectedExample;
                    data.height = this._space.height;
                    data.width = this._space.width;
                    this.spaceService.load(data).then(function (response) {
                        _this._space = response;
                    });
                }
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
var Clab2;
(function (Clab2) {
    var Golapi;
    (function (Golapi) {
        var LivingSpaceRestClient = (function (_super) {
            __extends(LivingSpaceRestClient, _super);
            function LivingSpaceRestClient() {
                _super.apply(this, arguments);
            }
            LivingSpaceRestClient.prototype["load"] = function (space) {
                return this.http.post(this.buildURL("/golapi/space/load"), space);
            };
            LivingSpaceRestClient.prototype["samples"] = function () {
                return this.http.get(this.buildURL("/golapi/space/samples"));
            };
            return LivingSpaceRestClient;
        }(Clab2.Http.RestClient));
        Golapi.LivingSpaceRestClient = LivingSpaceRestClient;
    })(Golapi = Clab2.Golapi || (Clab2.Golapi = {}));
})(Clab2 || (Clab2 = {}));
"use strict";
var GameController = Clab2.Golapi.GameController;
var GameRestClient = Clab2.Golapi.GameRestClient;
var LivingSpaceRestClient = Clab2.Golapi.LivingSpaceRestClient;
var module = angular.module("Clab2.Golapi", ["ngRoute", "Clab2.Component", "ngDraggable", "ngAnimate", "ui.bootstrap", "pascalprecht.translate"]);
modules.push(module.name);
module.provider("gameRestClient", ["settingsProvider", function (settings) {
        return {
            $get: ["httpProxy", function (httpProxy) {
                    return new GameRestClient(httpProxy, settings.endPointBase);
                }]
        };
    }]);
module.provider("spaceRestClient", ["settingsProvider", function (settings) {
        return {
            $get: ["httpProxy", function (httpProxy) {
                    return new LivingSpaceRestClient(httpProxy, settings.endPointBase);
                }]
        };
    }]);
module.controller("gameController", ["gameRestClient", "spaceRestClient", "settings", GameController]);
module.component("livingSpace", {
    templateUrl: ["settings", function (settings) {
            return settings.getModuleSettings("clab2-gol-module").createTemplateURL("living-space.html");
        }],
    controller: ["gameRestClient", "spaceRestClient", "settings", GameController],
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
"use strict";
var Clab2;
(function (Clab2) {
    var Golapi;
    (function (Golapi) {
        var Model;
        (function (Model) {
            function createLoadingData() {
                return {
                    name: null,
                    width: null,
                    height: null
                };
            }
            Model.createLoadingData = createLoadingData;
        })(Model = Golapi.Model || (Golapi.Model = {}));
    })(Golapi = Clab2.Golapi || (Clab2.Golapi = {}));
})(Clab2 || (Clab2 = {}));
//# sourceMappingURL=clab2-gol-module.js.map