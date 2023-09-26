import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SSSMSharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports     : [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        LoginRoutingModule,
        SSSMSharedModule
    ],
    providers: []
})
export class LoginModule
{
}
