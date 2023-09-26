import { AfterViewInit, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector   : 'vehicle',
    templateUrl: './vehicle.component.html',
    styleUrls  : ['./vehicle.component.scss']
})



export class VehicleComponent implements OnInit, AfterViewInit
{
    form: FormGroup;
  
    constructor( private _formBuilder: FormBuilder) {
        

    }
    ngAfterViewInit(): void {
        throw new Error("Method not implemented.");
    }
    ngOnInit(): void {
        this.form = this._formBuilder.group({
            company   : [
                {
                    value   : 'Google',
                    disabled: true
                }, Validators.required
            ],
            firstName : ['', Validators.required],
            lastName  : ['', Validators.required],
            address   : ['', Validators.required],
            address2  : ['', Validators.required],
            city      : ['', Validators.required],
            state     : ['', Validators.required],
            postalCode: ['', [Validators.required, Validators.maxLength(5)]],
            country   : ['', Validators.required]
        });
    }


}