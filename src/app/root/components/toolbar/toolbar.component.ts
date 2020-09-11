import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagerService } from 'src/app/shared-services/user-manager.service';
import { IconService } from 'src/app/shared-services/utilities/icon.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(
    private userManagerService: UserManagerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  signoutUser() {
    this.userManagerService.signout().subscribe((res) => {
      this.router.navigate(['signin']);
    });
  }
}
