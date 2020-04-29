import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SeccionComponent} from './seccion/seccion.component';


const routes: Routes = [
   {path:'',component:HomeComponent},
   {path:'home',component:HomeComponent},
   {path:'seccion',component:SeccionComponent},
   {path:'contacto',component:ContactoComponent},
   {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
