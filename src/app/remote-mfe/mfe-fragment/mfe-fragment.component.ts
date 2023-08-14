import { Component, OnInit, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareLibService } from 'share-lib';

@Component({
  selector: 'app-mfe-fragment',
  templateUrl: './mfe-fragment.component.html',
  styleUrls: ['./mfe-fragment.component.css']
})
export class MfeFragmentComponent implements OnInit {

  public name: string = '';
  constructor(@Optional() private shareLib?: ShareLibService) {
    this.shareLib?.name$.subscribe(val => {
      console.log(val);
      if(val) {
        this.name = val;
      }
      
    })
  }
  ngOnInit(): void {
    console.log('asa');
    
    
    // this.name$ = this.shareLib?.name$;  // subscribe to name$
  }

}
