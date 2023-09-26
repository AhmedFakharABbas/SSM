import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { SSSMNavigationComponent } from './navigation.component';
import { SSSMNavVerticalGroupComponent } from './vertical/group/group.component';
import { SSSMNavVerticalItemComponent } from './vertical/item/item.component';
import { SSSMNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';



@NgModule({
    imports     : [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatRippleModule,
    ],
    exports     : [
        SSSMNavigationComponent
    ],
    declarations: [
        SSSMNavigationComponent,
        SSSMNavVerticalGroupComponent,
        SSSMNavVerticalItemComponent,
        SSSMNavVerticalCollapsableComponent,
   
    ]
})
export class SSSMNavigationModule
{
}
