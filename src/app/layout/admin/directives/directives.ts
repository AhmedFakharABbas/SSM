import { NgModule } from '@angular/core';
import { SSSMInnerScrollDirective } from './sssm-inner-scroll/sssm-inner-scroll.directive';
import { SSSMMatSidenavHelperDirective, SSSMMatSidenavTogglerDirective } from './sssm-mat-sidenav/sssm-mat-sidenav.directive';
import { SSSMPerfectScrollbarDirective } from './sssm-perfect-scrollbar/sssm-perfect-scrollbar.directive';



@NgModule({
    declarations: [
      
        SSSMInnerScrollDirective,
        SSSMMatSidenavTogglerDirective,
        SSSMPerfectScrollbarDirective,
        SSSMMatSidenavHelperDirective
    ],
    imports     : [],
    exports     : [
     
        SSSMInnerScrollDirective,
        SSSMMatSidenavTogglerDirective,
        SSSMPerfectScrollbarDirective,
        SSSMMatSidenavHelperDirective
    ]
})
export class SSSMDirectivesModule
{
}
