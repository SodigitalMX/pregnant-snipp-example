import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cuestionary',
  templateUrl: './cuestionary.component.html'
})
export class CuestionaryComponent implements AfterViewInit {

  @ViewChild('questionary') pregnant: ElementRef | any | undefined

  ngAfterViewInit(): void {
    this.pregnant.nativeElement.PromotionId = 300;
    this.pregnant.nativeElement.UserId = 1404576;

    this.pregnant.nativeElement.onError = (err: any): any => {
      console.log('ERROR: ',err);
    };
    this.pregnant.nativeElement.onSuccess = (success: any): any => {
      console.log('OK: ',success);
    };

    this.pregnant.nativeElement.onInit = (): void => {
      console.log('INIT');
    };
  }
}
