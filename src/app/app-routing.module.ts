import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemViewerComponent } from './viewer/item-viewer/item-viewer.component';

const routes: Routes = [
    { path: 'item', component: ItemViewerComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
