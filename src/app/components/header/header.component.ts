import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  employeesMenu: boolean = false;
  employersMenu: boolean = false;
  coursesMenu: boolean = false;

  constructor() {}

  openEmployees(e: any) {
    e.stopPropagation()
    this.employeesMenu = !this.employeesMenu;
    this.employersMenu = false;
    this.coursesMenu = false;
  }

  openEmployers(e: any) {
    e.stopPropagation()
    this.employeesMenu = false;
    this.employersMenu = !this.employersMenu;
    this.coursesMenu = false;
  }

  openCourses(e: any) {
    e.stopPropagation()
    this.employeesMenu = false;
    this.employersMenu = false;
    this.coursesMenu = !this.coursesMenu;
  }


}
