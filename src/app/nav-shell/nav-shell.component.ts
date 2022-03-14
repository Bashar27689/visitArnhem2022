import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-shell',
  templateUrl: './nav-shell.component.html',
  styleUrls: ['./nav-shell.component.css']
})
export class NavShellComponent implements OnInit {

  constructor( public router: Router,) {
   
}

  ngOnInit() {
  }

}
