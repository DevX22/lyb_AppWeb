import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import("./page-client/page-client.module").then(x => x.PageClientModule)
    
  },
  {
    path: 'tienda',
    loadChildren:()=> import("./store/store.module").then(x=>x.StoreModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
