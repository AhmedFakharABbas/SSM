import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
import { SSSMSharedModule } from 'src/app/shared/shared.module';



@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        SSSMSharedModule
    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
