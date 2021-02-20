import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IconService } from '@core/icon.service';
import { UserManagerService } from '@core/user-manager.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() showMenuButton: boolean;
  @Output() menuButton: EventEmitter<MouseEvent> = new EventEmitter();

  profile: any;
  constructor (
    private router: Router,
    private iconService: IconService,
    private userService: UserManagerService
  ) {
    this.iconService.loadIcons(['signout']);
    this.getProfile();
  }

  ngOnInit(): void { }

  signoutUser() {
    this.userService.logout();
  }

  openDrawer(event) {
    this.menuButton.emit(event);
  }

  getProfile() {
    this.userService.getProfile().subscribe(res => {
      console.log(res);
      this.profile = res;
    });
  }
}
