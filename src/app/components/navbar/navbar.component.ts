import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHome(){
    this.menu = false;
    this.router.navigate(['/', 'home']);
  }

  goToAddUpdate(){
    this.menu = false;
    this.router.navigate(['/', 'add-update']);
  }

}
