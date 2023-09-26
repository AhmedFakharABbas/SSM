import { ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SSSMNavigationService } from 'src/app/services/common/SSSMNavigationService';
import { navigation } from 'src/app/shared/navigation';
import { SSSMNavigationItem } from 'src/app/shared/types';



@Component({
    selector   : 'nav-vertical-group',
    templateUrl: './group.component.html',
    styleUrls  : ['./group.component.scss']
})
export class SSSMNavVerticalGroupComponent implements OnInit, OnDestroy
{
    @HostBinding('class')
    classes = 'nav-group nav-item';

    @Input()
    item: SSSMNavigationItem;

    // Private
    private _unsubscribeAll: Subject<any>;

  
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _sssmNavigationService: SSSMNavigationService
    )
    {
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
        // Subscribe to navigation item
        merge(
            this._sssmNavigationService.onNavigationItemAdded,
            this._sssmNavigationService.onNavigationItemUpdated,
            this._sssmNavigationService.onNavigationItemRemoved
        ).pipe(takeUntil(this._unsubscribeAll))
         .subscribe(() => {

             // Mark for check
             this._changeDetectorRef.markForCheck();
         });
         var nav=navigation[0].children;
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
