import { NgModule } from '@angular/core';
import { SSSMSharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from './navbar.component';
import { NavbarVerticalStyle1Module } from './vertical/vertical.module';



@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports     : [
        SSSMSharedModule,
        NavbarVerticalStyle1Module,
    ],
    exports     : [
        NavbarComponent
    ]
})
export class NavbarModule
{
}
