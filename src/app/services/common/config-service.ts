import { Inject, Injectable, InjectionToken } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as _ from 'lodash';
import { SSSMNavigationService } from './SSSMNavigationService';
import { navigation } from 'src/app/shared/navigation';

// Create the injection token for the custom settings
export const SSSM_CONFIG = new InjectionToken('sssmCustomConfig');

@Injectable({
    providedIn: 'root'
})
export class SSSMConfigService {
    // Private
    private _configSubject: BehaviorSubject<any>;
    private readonly _defaultConfig: any;

    /**
     * Constructor
     *
     * @param {Platform} _platform
     * @param {Router} _router
     * @param _config
     */
    constructor(
        private _platform: Platform,
        private _router: Router,
        @Inject(SSSM_CONFIG) private _config,
        private _sssmNavigationService: SSSMNavigationService
    ) {
        // Set the default config from the user provided config (from forRoot)
        this._defaultConfig = _config;

        // Initialize the service
        this._init();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set and get the config
     */
    set config(value) {
        // Get the value from the behavior subject
        let config = this._configSubject.getValue();

        // Merge the new config
        config = _.merge({}, config, value);

        // Notify the observers
        this._configSubject.next(config);
    }

    get config(): any | Observable<any> {
        return this._configSubject.asObservable();
    }

    /**
     * Get default config
     *
     * @returns {any}
     */
    get defaultConfig(): any {
        return this._defaultConfig;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     *
     * @private
     */
    private _init(): void {
        /**
         * Disable custom scrollbars if browser is mobile
         */
        if (this._platform.ANDROID || this._platform.IOS) {
            this._defaultConfig.customScrollbars = false;
        }

        // Set the config from the default config
        this._configSubject = new BehaviorSubject(_.cloneDeep(this._defaultConfig));

        // Reload the default layout config on every RoutesRecognized event
        // if the current layout config is different from the default one
        this._router.events
            .pipe(filter(event => event instanceof ResolveEnd))
            .subscribe(() => {
                if (!_.isEqual(this._configSubject.getValue().layout, this._defaultConfig.layout)) {
                    // Clone the current config
                    const config = _.cloneDeep(this._configSubject.getValue());

                    // Reset the layout from the default config
                    config.layout = _.cloneDeep(this._defaultConfig.layout);

                    // Set the config
                    this._configSubject.next(config);
                }
            });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set config
     *
     * @param value
     * @param {{emitEvent: boolean}} opts
     */
    setConfig(value, opts = { emitEvent: true }): void {
        // Get the value from the behavior subject
        let config = this._configSubject.getValue();

        // Merge the new config
        config = _.merge({}, config, value);

        // If emitEvent option is true...
        if (opts.emitEvent === true) {
            // Notify the observers
            this._configSubject.next(config);
        }
    }

    /**
     * Get config
     *
     * @returns {Observable<any>}
     */
    getConfig(): Observable<any> {
        return this._configSubject.asObservable();
    }

    /**
     * Reset to the default config
     */
    resetToDefaults(): void {
        // Set the config from the default config
        this._configSubject.next(_.cloneDeep(this._defaultConfig));
    }
    setConfiguration() {
        if (localStorage.getItem('userToken') == null) {


            // navigation[0].children.push({
            //     id: 'dashboard',
            //     title: 'Dashboard',
            //     type: 'item',
            //     icon: 'dashboard',
            //     url: 'admin/dashboard'
            // }
            //     ,

            //     {
            //         id: 'configuration',
            //         title: 'Configuration',
            //         type: 'collapsable',
            //         icon: 'dashboard',
            //         url: 'admin/dashboard',
            //         children: [
            //             {
            //                 id: 'analytics',
            //                 title: 'Analytics',
            //                 type: 'item',
            //                 url: 'admin/dashboard'
            //             },
            //             {
            //                 id: 'project',
            //                 title: 'Project',
            //                 type: 'item',
            //                 url: 'admin/dashboard'
            //             }
            //         ]
            //     }


            // );
            this._sssmNavigationService.unregister('main');
            this._sssmNavigationService.register('main', navigation);
            this._sssmNavigationService.setCurrentNavigation('main');
            // this._userRepository.GetAccessRights().subscribe((res: any) => {
            //     if (res._obj.UserAccessRights.length > 0) {
            //         for (let i = 0; i < res._obj.UserAccessRights.length; i++) {
            //             var child = {
            //                 id: res._obj.UserAccessRights[i].PageName, title: res._obj.UserAccessRights[i].PageTitle,
            //                 type: res._obj.UserAccessRights[i].DisplayType,
            //                 icon: res._obj.UserAccessRights[i].StateIcon, url: res._obj.UserAccessRights[i].StateName
            //             };
            //             navigation[0].children.push(child);
            //         }
            //     }
            //     this._giantNavigationService.unregister('main');

            //     this._giantNavigationService.register('main', navigation);

            //      this._giantNavigationService.setCurrentNavigation('main');
            // });
        }

    }

}

