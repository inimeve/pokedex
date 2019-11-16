import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../core/settings/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private settingsService: SettingsService) { }

  ngOnInit() {
  }

  toggleSidebar(): void {
    this.settingsService.toggleSidebarState();
  }

}
