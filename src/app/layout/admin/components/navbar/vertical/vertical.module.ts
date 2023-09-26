import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarVerticalStyle1Component } from './vertical.component';
import { SSSMSharedModule } from 'src/app/shared/shared.module';
import { SSSMNavigationModule } from '../../../navigation/navigation.module';




@NgModule({
    declarations: [
        NavbarVerticalStyle1Component
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        SSSMSharedModule,
        SSSMNavigationModule
    ],
    exports     : [
        NavbarVerticalStyle1Component
    ]
})
export class NavbarVerticalStyle1Module
{
}
