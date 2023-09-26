import { AfterViewInit, Component,OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SSSMAnimations } from 'src/app/layout/admin/animations';
import { SSSMNavigationService } from 'src/app/services/common/SSSMNavigationService';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleModel } from 'src/app/models/vehicle/vehicle-model';
import { VehicleRepository } from 'src/app/repositories/vehicle-repository/VehicleRepository';
import { Router } from '@angular/router';

@Component({
    selector   : 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls  : ['./dashboard.component.scss'],
    animations   : SSSMAnimations,
    encapsulation: ViewEncapsulation.None
})



export class DashboardComponent implements OnInit, AfterViewInit
{
  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private  vehicleRepository: VehicleRepository, private _router: Router) {
      // Create 100 users
      const users: UserData[] = [];
      for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }
  
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    // this.vehicleRepository.GetVehicles().subscribe((res: any) => {
    //   if(res._obj.length>0){
    //     this.dataSource = new MatTableDataSource(res._obj);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   }
    // });
  }
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  OnEdit(death: any) {
    this._router.navigate(['/pages/death',death.id], { state: { data: { death } } });
  }
  OnDelete(id){
    this.vehicleRepository.DeleteVahicle(id).subscribe((res: any) => {
      if (res._statusCode == 100) {
        // this._churchSnackBarService.snackbarSucces(res._message);
       }
       if (res._statusCode == 400) {
      //  this._churchSnackBarService.snackbarError(res._message);
       }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


}
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

  export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
  }
