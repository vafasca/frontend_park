import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareCoockieService } from 'src/app/share/share-coockie.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor(private shareCookie: ShareCoockieService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.shareCookie.deleteEmployee();
    this.router.navigate(['']);
  }

}
