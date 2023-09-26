
import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './layout/admin/components/spinner/loader.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { sssmConfig } from './layout/admin/config';
import { SSSMSharedModule } from './shared/shared.module';
import { SSSMSidebarModule } from './layout/admin/sidebar/sidebar.module';
import { SSSmSnackBarService } from './shared/utils/sssm-snack-bar';
import { LoaderInterceptor } from './services/common/http-interceptor';
import { SSSMModule } from './layout/admin/sssm-modules/sssm.module';
import { LayoutModule } from './layout/layout.module';
import { LoaderService } from './services/common/loader-service';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
    declarations: [AppComponent,LoaderComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        HttpClientModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatTooltipModule,
        SSSMModule.forRoot(sssmConfig),
        SSSMSharedModule,
        SSSMSidebarModule,
        LayoutModule
    ],
    providers: [
        LoaderService,
        SSSmSnackBarService,
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
      ],
    bootstrap: [AppComponent]
})
export class AppModule { }
