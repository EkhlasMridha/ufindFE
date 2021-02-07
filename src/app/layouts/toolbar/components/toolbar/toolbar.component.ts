import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IconService } from '@core/icon.service';
import { TokenService } from '@core/token.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() showMenuButton: boolean;
  @Output() menuButton: EventEmitter<MouseEvent> = new EventEmitter();
  constructor (
    private tokenService: TokenService,
    private router: Router,
    private iconService: IconService
  ) {
    this.iconService.loadIcons(['signout']);
  }

  ngOnInit(): void { }

  signoutUser() {
    this.tokenService.removeToken();
  }

  openDrawer(event) {
    this.menuButton.emit(event);
  }

}
