import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {
  @Input() value1:string | undefined;
  constructor() { 
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("NgonInit");
  }
  ngOnChanges(): void {
    console.log("NgonChanges");
  }

ngDoCheck(): void {
  console.log("NgDoCheck");
}

ngAfterContentInit(): void {
  console.log("NgAfterContetnInit");
}

ngAfterContentChecked(): void {
  console.log("NgAfterContetnChecked");
}

ngAfteViewInit(): void {
  console.log("NgAfterViewInit");
}

ngAfterViewChecked(): void {
  console.log("NgAfterViewChecked");
}

ngOnDestroy(): void {
  console.log("NgonDestroy");
}

}
