import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  //recebe de fora
 @Input() hasMore:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
