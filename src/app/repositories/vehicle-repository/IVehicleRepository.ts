import { VehicleModel } from "src/app/models/vehicle/vehicle-model";
import { IGenericRepository } from "../generic-repository/IGenericRepository";
export interface IVehicleRepository extends IGenericRepository<VehicleModel> {
    AddOrUpdateVehicle(death: VehicleModel);
    GetVehicles();
    DeleteVahicle(Id: number)
    GetByIdVehicle(Id: number)
}


