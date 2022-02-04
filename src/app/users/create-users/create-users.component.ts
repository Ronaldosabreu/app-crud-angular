import { Component, OnInit } from '@angular/core';
import { PoFieldModule } from '@po-ui/ng-components';
import { RequestCreate, ResponseCreate } from '../../Modules/user.module';
import { UsersService } from '../../Services/Users.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent implements OnInit {


  request: RequestCreate = {
    name:'',
    job:''
  }

  response: ResponseCreate;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  save()
  {
      this.userService.postUser(this.request).subscribe(res=>{
          this.response =res;
      });
  }


}
