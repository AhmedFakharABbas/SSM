import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SSSMNavigationService } from './services/common/SSSMNavigationService';
import { SSSMSidebarService } from './layout/admin/sidebar/sidebar.service';
import { SSSMConfigService } from './services/common/config-service';

@Component({
    selector   : 'app',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy
{
    sssmConfig: any;
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;

  
    constructor(
        @Inject(DOCUMENT) private document: any,
        private _sssmConfigService: SSSMConfigService,
        private _sssmNavigationService: SSSMNavigationService,
        private _sssmSidebarService: SSSMSidebarService,
        private _platform: Platform,
    )
    {
    // Get default navigation
         //this.navigation = navigation;


        // Register the navigation to the service
        //this._sssmNavigationService.register('main', this.navigation);

        // Set the main navigation as our current navigation
        //this._sssmNavigationService.setCurrentNavigation('main');

        // Add languages
        // this._translateService.addLangs(['en', 'tr']);

        // Set the default language
        // this._translateService.setDefaultLang('en');

        // Set the navigation translations
        // this._sssmTranslationLoaderService.loadTranslations(navigationEnglish, navigationTurkish);

        // Use a language
        // this._translateService.use('en');

        /**
         * ----------------------------------------------------------------------------------------------------
         * ngxTranslate Fix Start
         * ----------------------------------------------------------------------------------------------------
         */

        /**
         * If you are using a language other than the default one, i.e. Turkish in this case,
         * you may encounter an issue where some of the components are not actually being
         * translated when your app first initialized.
         *
         * This is related to ngxTranslate module and below there is a temporary fix while we
         * are moving the multi language implementation over to the Angular's core language
         * service.
         **/

        // Set the default language to 'en' and then back to 'tr'.
        // '.use' cannot be used here as ngxTranslate won't switch to a language that's already
        // been selected and there is no way to force it, so we overcome the issue by switching
        // the default language back and forth.
        /**
         setTimeout(() => {
            this._translateService.setDefaultLang('en');
            this._translateService.setDefaultLang('tr');
         });
         */

        /**
         * ----------------------------------------------------------------------------------------------------
         * ngxTranslate Fix End
         * ----------------------------------------------------------------------------------------------------
         */

        // Add is-mobile class to the body if the platform is mobile
        if ( this._platform.ANDROID || this._platform.IOS )
        {
            this.document.body.classList.add('is-mobile');
        }

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

                // Boxed
                if ( this.sssmConfig.layout.width === 'boxed' )
                {
                    this.document.body.classList.add('boxed');
                }
                else
                {
                    this.document.body.classList.remove('boxed');
                }

                // Color theme - Use normal for loop for IE11 compatibility
                for ( let i = 0; i < this.document.body.classList.length; i++ )
                {
                    const className = this.document.body.classList[i];

                    if ( className.startsWith('theme-') )
                    {
                        this.document.body.classList.remove(className);
                    }
                }

                this.document.body.classList.add(this.sssmConfig.colorTheme);
            });
           
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void
    {
        this._sssmSidebarService.getSidebar(key).toggleOpen();
    }
}
