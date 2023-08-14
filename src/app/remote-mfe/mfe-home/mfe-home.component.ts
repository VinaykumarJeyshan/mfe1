import { Component, OnInit, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareLibService } from 'share-lib';

@Component({
  selector: 'app-mfe-home',
  templateUrl: './mfe-home.component.html',
  styleUrls: ['./mfe-home.component.css']
})
export class MfeHomeComponent implements OnInit {

  name$:Observable<string> | undefined;
  constructor(@Optional() private readonly shareLib?: ShareLibService) {
    
  }
  ngOnInit(): void {
    this.name$ = this.shareLib?.name$;  // subscribe to name$
  }

}
