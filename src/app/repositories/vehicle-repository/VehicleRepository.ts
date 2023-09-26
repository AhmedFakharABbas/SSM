
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map, catchError } from "rxjs/operators";
import { GenericRepository } from "../generic-repository/GenericRepository";
import { VehicleModel } from "src/app/models/vehicle/vehicle-model";
import { IVehicleRepository } from "./IVehicleRepository";

@Injectable({ providedIn: 'root' })
export class VehicleRepository extends GenericRepository<VehicleModel> implements IVehicleRepository{

    constructor(protected _http: HttpClient) {

        super(_http, '/api/RegisterVehicle/', environment.urlAddress);
    }

    AddOrUpdateVehicle(vehicle: VehicleModel) {
       if(vehicle.vehicleId>0){
        var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('Token'), 'Content-Type': 'application/json' });
        return this._http.put(environment.urlAddress + '', vehicle, { headers: reqHeader }).pipe(map(this.extractData), catchError(this.handleError));
       }
       else{
        var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('Token'), 'Content-Type': 'application/json' });
        return this._http.post(environment.urlAddress + '', vehicle, { headers: reqHeader }).pipe(map(this.extractData), catchError(this.handleError));
       }
    }
    GetVehicles() {
        var reqHeader = new HttpHeaders({ 'No Auth': 'true', 'Content-Type': 'application/json' });
        return this._http.get(environment.urlAddress + 'api/GetVehicleList', { headers: reqHeader }).pipe(map(this.extractData), catchError(this.handleError));
    }
    DeleteVahicle(Id: number) {
        var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('Token'), 'Content-Type': 'application/json' });
        return this._http.delete(environment.urlAddress + '' + Id, { headers: reqHeader }).pipe(map(this.extractData), catchError(this.handleError));
    }
    GetByIdVehicle(Id: number) {
        var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('Token'), 'Content-Type': 'application/json' });
        return this._http.get(environment.urlAddress + '' + Id, { headers: reqHeader }).pipe(map(this.extractData), catchError(this.handleError));
    }

}