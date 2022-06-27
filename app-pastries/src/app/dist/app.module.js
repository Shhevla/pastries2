"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var pastries_component_1 = require("./pastries/pastries.component");
var pastrie_details_component_1 = require("./pastrie-details/pastrie-details.component");
var patrie_search_component_1 = require("./patrie-search/patrie-search.component");
var pastrie_login_component_1 = require("./pastrie-login/pastrie-login.component");
var pastrie_description_component_1 = require("./pastrie-description/pastrie-description.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                pastries_component_1.PastriesComponent,
                pastrie_details_component_1.PastrieDetailsComponent,
                patrie_search_component_1.PatrieSearchComponent,
                pastrie_login_component_1.PastrieLoginComponent,
                pastrie_description_component_1.PastrieDescriptionComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
