import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-chile',
  templateUrl: './life-cycle-chile.component.html',
  styleUrls: ['./life-cycle-chile.component.css']
})
export class LifeCycleChileComponent implements OnInit {
 
  constructor() { 
    console.log("child constructor");
  }

  ngOnInit(): void {
    console.log("child NgonInit");
  }
  ngOnChanges(): void {
    console.log("child NgonChanges");
  }

ngDoCheck(): void {
  console.log("child NgDoCheck");
}

ngAfterContentInit(): void {
  console.log("child NgAfterContetnInit");
}

ngAfterContentChecked(): void {
  console.log("child NgAfterContetnChecked");
}

ngAfteViewInit(): void {
  console.log("child NgAfterViewInit");
}

ngAfterViewChecked(): void {
  console.log("child NgAfterViewChecked");
}

ngOnDestroy(): void {
  console.log("child NgonDestroy");
}
}
