import { NgModule } from '@angular/core';

import { SSSMSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        SSSMSidebarComponent
    ],
    exports     : [
        SSSMSidebarComponent
    ]
})
export class SSSMSidebarModule
{
}
