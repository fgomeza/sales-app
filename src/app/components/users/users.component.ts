import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { OverlayPanel } from 'primeng/overlaypanel';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[]
  menuItems: MenuItem[];
  @ViewChild('overlayPanel') overlayPanel: OverlayPanel;
  @ViewChild('menuBar') menuBar: Menubar;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
    this.menuItems = this.getMenuItems();
  }

  private getMenuItems() {
    const MENU_ITEMS: MenuItem[] = [
      { label: 'Add', icon: 'pi pi-fw pi-plus', command: (event) => {
        this.overlayPanel.show(event.originalEvent);
      } },
      { label: 'View' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Delete', icon: 'pi pi-fw pi-trash' },
      { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
    ];

    return MENU_ITEMS;
  }

}
