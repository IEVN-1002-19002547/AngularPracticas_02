import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VentasComponent } from "./cine/ventas/ventas.component";
import { GradosCentComponent } from "./formConversion/grados-cent/grados-cent.component";
import { MultiplicarComponent } from "./formulario/multiplicar/multiplicar.component";
import { HomeComponent } from "./home/home/home.component";



const routes: Routes=[
    {path:'home', component: HomeComponent},
    {path:'ventas', component: VentasComponent},
    {path:'grados-cent', component: GradosCentComponent}, 
    {path: 'multiplicar', component: MultiplicarComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})


export class AppRoutingModule{}