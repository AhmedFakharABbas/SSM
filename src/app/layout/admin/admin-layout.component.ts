import { Component, OnDestroy, OnInit, ViewEncapsulation, AfterContentInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SSSMConfigService } from 'src/app/services/common/config-service';
import { SSSMNavigationService } from 'src/app/services/common/SSSMNavigationService';
import { navigation } from 'src/app/shared/navigation';

@Component({
    selector     : 'admin-layout',
    templateUrl  : './admin-layout.component.html',
    styleUrls    : ['./admin-layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AdminLayoutComponent implements OnInit, OnDestroy 
{
    sssmConfig: any;
    navigation: any;
    isNotLoginPage:boolean;
    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _sssmConfigService: SSSMConfigService,
        private _sssmNavigationService : SSSMNavigationService
    )
    {
        // Set the defaults
        
       // this.navigation = navigation;
        // Set the private defaults

        this._unsubscribeAll = new Subject();
    }
   

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to config changes
        this._sssmConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.sssmConfig = config;
            });
            if(navigation.length > 0){
                this._sssmConfigService.setConfiguration();
            }
           if(localStorage.getItem('userToken')==null){
            this.isNotLoginPage=true;
           }
           
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();

      
    }
}
