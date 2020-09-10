import { NgModule } from "@angular/core";
import { NativeScriptHttpClientModule, NativeScriptRouterModule } from "@nativescript/angular";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes), NativeScriptHttpClientModule],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
