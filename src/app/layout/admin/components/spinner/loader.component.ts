import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { LoaderService } from 'src/app/services/common/loader-service';


@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  // color: ThemePalette = 'primary';
  // mode: ProgressSpinnerMode = 'determinate';
  // value = 50;


  isLoading: Subject<boolean> = this.loaderService.isLoading;
  
  constructor(private loaderService: LoaderService){}
}