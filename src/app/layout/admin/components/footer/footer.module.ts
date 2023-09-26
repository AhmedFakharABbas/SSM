import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer.component';
import { SSSMSharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        SSSMSharedModule
    ],
    exports     : [
        FooterComponent
    ]
})
export class FooterModule
{
}
