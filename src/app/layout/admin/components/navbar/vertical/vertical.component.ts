import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { delay, filter, take, takeUntil } from 'rxjs/operators';
import { SSSMConfigService } from 'src/app/services/common/config-service';
import { SSSMNavigationService } from 'src/app/services/common/SSSMNavigationService';
import { SSSMPerfectScrollbarDirective } from '../../../directives/sssm-perfect-scrollbar/sssm-perfect-scrollbar.directive';
import { SSSMSidebarService } from '../../../sidebar/sidebar.service';



@Component({
    selector     : 'navbar-vertical',
    templateUrl  : './vertical.component.html',
    styleUrls    : ['./vertical.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarVerticalStyle1Component implements OnInit, OnDestroy
{
    sssmConfig: any;
    navigation: any;

    // Private
    private _sssmPerfectScrollbar: SSSMPerfectScrollbarDirective;
    private _unsubscribeAll: Subject<any>;

 
    constructor(
        private _sssmConfigService: SSSMConfigService,
        private _sssmNavigationService: SSSMNavigationService,
        private _sssmSidebarService: SSSMSidebarService,
        private _router: Router
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // Directive
    @ViewChild(SSSMPerfectScrollbarDirective, {static: true})
    set directive(theDirective: SSSMPerfectScrollbarDirective)
    {
        if ( !theDirective )
        {
            return;
        }

        this._sssmPerfectScrollbar = theDirective;

        // Update the scrollbar on collapsable item toggle
        this._sssmNavigationService.onItemCollapseToggled
            .pipe(
                delay(500),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this._sssmPerfectScrollbar.update();
            });

        // Scroll to the active item position
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {
                    setTimeout(() => {
                        this._sssmPerfectScrollbar.scrollToElement('navbar .nav-link.active', -120);
                    });
                }
            );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                    if ( this._sssmSidebarService.getSidebar('navbar') )
                    {
                        this._sssmSidebarService.getSidebar('navbar').close();
                    }
                }
            );

        // Subscribe to the config changes
        this._sssmConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.sssmConfig = config;
            });

        // Get current navigation
        this._sssmNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._sssmNavigationService.getCurrentNavigation();
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
     * Toggle sidebar opened status
     */
    toggleSidebarOpened(): void
    {
        this._sssmSidebarService.getSidebar('navbar').toggleOpen();
    }

    /**
     * Toggle sidebar folded status
     */
    toggleSidebarFolded(): void
    {
        this._sssmSidebarService.getSidebar('navbar').toggleFold();
    }
}
