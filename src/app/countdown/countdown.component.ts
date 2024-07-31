import { Component, EventEmitter, Input, OnDestroy, OnInit,OnChanges,  Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent implements OnInit ,OnDestroy ,OnChanges {
  ngOnInit() :void{
  this.startCountdown();
  }
  /*
  @Output() is used when a child component needs to send information to its parent component.
Think of it like a child raising their hand to tell the parent something.

//EventEmitter is used to create the message the child wants to send.

//
Parent Component:
Listens for the child's message and reacts to it.



  */
  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete= new EventEmitter<void>();

  @Input() init: number =0;

  public counter:number  =0;
  private countdownRef :any=null;
  startCountdown(){
if(this.init && this.init >0)
  this.cleartimeout();
this.counter =this.init;
this.doCountDown();
  }
  doCountDown(){

    this.countdownRef = setTimeout(()=>{
    this.counter=this.counter -1 ;
    this.processCount();
    } , 1000)}
  processCount() {
    this.onDecrease.emit(this.counter);
    console.log(this.counter);
if (this.counter ==0)
{
  this.onComplete.emit()
  console.log("--count ends--");
}
else {
  this.doCountDown();
}
  }

  private cleartimeout (){
    if(this.countdownRef){
      clearTimeout(this.countdownRef);
      this.countdownRef =null;
    }
  }



constructor (){}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('init value updated to:' ,changes['init'].currentValue);
  }
  ngOnDestroy(): void {
this.cleartimeout()  }


}
