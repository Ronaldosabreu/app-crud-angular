import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { ResponserUsers } from '../Modules/user.module';
import { UsersService } from '../Services/Users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  responseUsers: ResponserUsers;
  columns: Array<PoTableColumn>;

  constructor(private userService:UsersService) { }

  ngOnInit(): void
  {
    this.userService.getUsers().subscribe
    (
      res => this.responseUsers = res
    );

    this.columns = [
      { property: 'id', label: 'Codigo', type: 'number' },
      { property: 'first_name', label: 'Nome', type: 'string' },
      { property: 'last_name', label: 'Ultimo Nome', type: 'string' },
    ];
  }

}
