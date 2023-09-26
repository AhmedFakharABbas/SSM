import { Injectable } from "@angular/core";
import { MatSnackBarConfig, MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class SSSmSnackBarService {

    configSucces: MatSnackBarConfig = { panelClass: ['background-green'],duration: 3000,verticalPosition: "top"};
    configError: MatSnackBarConfig = { panelClass: ['background-red'],duration: 3000,verticalPosition: "top"};
    
    constructor(private _snackBar: MatSnackBar) {
        
    }
    
  snackbarSuccess(message) {
    this._snackBar.open(message, 'close', this.configSucces);
  }

  snackbarError(message) {
    this._snackBar.open(message, 'close', this.configError);
  }
}