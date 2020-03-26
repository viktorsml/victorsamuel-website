import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, public angularFireAuth: AngularFireAuth) {}

  ngOnInit(): void {}

  public logout(): void {
    this.angularFireAuth.auth
      .signOut()
      .then(() => {
        this.router.navigateByUrl('/login');
      })
      .catch(reason => {
        console.warn(reason);
      });
  }
}
