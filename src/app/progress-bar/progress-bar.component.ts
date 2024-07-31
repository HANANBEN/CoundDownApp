import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})

export class ProgressBarComponent {
//@input decorator`which allowed to pass the variable outside the componenet
@Input() progress:number =0;
constructor (){}
}
